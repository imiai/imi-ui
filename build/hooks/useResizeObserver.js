import { useMemo, useRef, useState, useEffect, useCallback } from 'react';

// This of course could've been more streamlined with internal state instead of
// refs, but then host hooks / components could not opt out of renders.
// This could've been exported to its own module, but the current build doesn't
// seem to work with module imports and I had no more time to spend on this...
function useResolvedElement(subscriber, refOrElement) {
    var callbackRefElement = useRef(null);
    var lastReportRef = useRef(null);
    var cleanupRef = useRef();
    var callSubscriber = useCallback(function () {
        var element = null;
        if (callbackRefElement.current) {
            element = callbackRefElement.current;
        }
        else if (refOrElement) {
            if (refOrElement instanceof HTMLElement) {
                element = refOrElement;
            }
            else {
                element = refOrElement.current;
            }
        }
        if (lastReportRef.current &&
            lastReportRef.current.element === element &&
            lastReportRef.current.reporter === callSubscriber) {
            return;
        }
        if (cleanupRef.current) {
            cleanupRef.current();
            // Making sure the cleanup is not called accidentally multiple times.
            cleanupRef.current = null;
        }
        lastReportRef.current = {
            reporter: callSubscriber,
            element: element,
        };
        // Only calling the subscriber, if there's an actual element to report.
        if (element) {
            cleanupRef.current = subscriber(element);
        }
    }, [refOrElement, subscriber]);
    // On each render, we check whether a ref changed, or if we got a new raw
    // element.
    useEffect(function () {
        // With this we're *technically* supporting cases where ref objects' current value changes, but only if there's a
        // render accompanying that change as well.
        // To guarantee we always have the right element, one must use the ref callback provided instead, but we support
        // RefObjects to make the hook API more convenient in certain cases.
        callSubscriber();
    }, [callSubscriber]);
    return useCallback(function (element) {
        callbackRefElement.current = element;
        callSubscriber();
    }, [callSubscriber]);
}
// We're only using the first element of the size sequences, until future versions of the spec solidify on how
// exactly it'll be used for fragments in multi-column scenarios:
// From the spec:
// > The box size properties are exposed as FrozenArray in order to support elements that have multiple fragments,
// > which occur in multi-column scenarios. However the current definitions of content rect and border box do not
// > mention how those boxes are affected by multi-column layout. In this spec, there will only be a single
// > ResizeObserverSize returned in the FrozenArray, which will correspond to the dimensions of the first column.
// > A future version of this spec will extend the returned FrozenArray to contain the per-fragment size information.
// (https://drafts.csswg.org/resize-observer/#resize-observer-entry-interface)
//
// Also, testing these new box options revealed that in both Chrome and FF everything is returned in the callback,
// regardless of the "box" option.
// The spec states the following on this:
// > This does not have any impact on which box dimensions are returned to the defined callback when the event
// > is fired, it solely defines which box the author wishes to observe layout changes on.
// (https://drafts.csswg.org/resize-observer/#resize-observer-interface)
// I'm not exactly clear on what this means, especially when you consider a later section stating the following:
// > This section is non-normative. An author may desire to observe more than one CSS box.
// > In this case, author will need to use multiple ResizeObservers.
// (https://drafts.csswg.org/resize-observer/#resize-observer-interface)
// Which is clearly not how current browser implementations behave, and seems to contradict the previous quote.
// For this reason I decided to only return the requested size,
// even though it seems we have access to results for all box types.
// This also means that we get to keep the current api, being able to return a simple { width, height } pair,
// regardless of box option.
var extractSize = function (entry, boxProp, sizeType) {
    if (!entry[boxProp]) {
        if (boxProp === "contentBoxSize") {
            // The dimensions in `contentBoxSize` and `contentRect` are equivalent according to the spec.
            // See the 6th step in the description for the RO algorithm:
            // https://drafts.csswg.org/resize-observer/#create-and-populate-resizeobserverentry-h
            // > Set this.contentRect to logical this.contentBoxSize given target and observedBox of "content-box".
            // In real browser implementations of course these objects differ, but the width/height values should be equivalent.
            return entry.contentRect[sizeType === "inlineSize" ? "width" : "height"];
        }
        return undefined;
    }
    // A couple bytes smaller than calling Array.isArray() and just as effective here.
    return entry[boxProp][0]
        ? entry[boxProp][0][sizeType]
        : // TS complains about this, because the RO entry type follows the spec and does not reflect Firefox's current
            // behaviour of returning objects instead of arrays for `borderBoxSize` and `contentBoxSize`.
            // @ts-ignore
            entry[boxProp][sizeType];
};
function useResizeObserver(opts) {
    if (opts === void 0) { opts = {}; }
    // Saving the callback as a ref. With this, I don't need to put onResize in the
    // effect dep array, and just passing in an anonymous function without memoising
    // will not reinstantiate the hook's ResizeObserver.
    var onResize = opts.onResize;
    var onResizeRef = useRef(undefined);
    onResizeRef.current = onResize;
    var round = opts.round || Math.round;
    // Using a single instance throughout the hook's lifetime
    var resizeObserverRef = useRef();
    var _a = useState({
        width: undefined,
        height: undefined,
    }), size = _a[0], setSize = _a[1];
    // In certain edge cases the RO might want to report a size change just after
    // the component unmounted.
    var didUnmount = useRef(false);
    useEffect(function () {
        return function () {
            didUnmount.current = true;
        };
    }, []);
    // Using a ref to track the previous width / height to avoid unnecessary renders.
    var previous = useRef({
        width: undefined,
        height: undefined,
    });
    // This block is kinda like a useEffect, only it's called whenever a new
    // element could be resolved based on the ref option. It also has a cleanup
    // function.
    var refCallback = useResolvedElement(useCallback(function (element) {
        // We only use a single Resize Observer instance, and we're instantiating it on demand, only once there's something to observe.
        // This instance is also recreated when the `box` option changes, so that a new observation is fired if there was a previously observed element with a different box option.
        if (!resizeObserverRef.current ||
            resizeObserverRef.current.box !== opts.box ||
            resizeObserverRef.current.round !== round) {
            resizeObserverRef.current = {
                box: opts.box,
                round: round,
                instance: new ResizeObserver(function (entries) {
                    var entry = entries[0];
                    var boxProp = opts.box === "border-box"
                        ? "borderBoxSize"
                        : opts.box === "device-pixel-content-box"
                            ? "devicePixelContentBoxSize"
                            : "contentBoxSize";
                    var reportedWidth = extractSize(entry, boxProp, "inlineSize");
                    var reportedHeight = extractSize(entry, boxProp, "blockSize");
                    var newWidth = reportedWidth ? round(reportedWidth) : undefined;
                    var newHeight = reportedHeight
                        ? round(reportedHeight)
                        : undefined;
                    if (previous.current.width !== newWidth ||
                        previous.current.height !== newHeight) {
                        var newSize = { width: newWidth, height: newHeight };
                        previous.current.width = newWidth;
                        previous.current.height = newHeight;
                        if (onResizeRef.current) {
                            onResizeRef.current(newSize);
                        }
                        else {
                            if (!didUnmount.current) {
                                setSize(newSize);
                            }
                        }
                    }
                }),
            };
        }
        resizeObserverRef.current.instance.observe(element, { box: opts.box });
        return function () {
            if (resizeObserverRef.current) {
                resizeObserverRef.current.instance.unobserve(element);
            }
        };
    }, [opts.box, round]), opts.ref);
    return useMemo(function () { return ({
        ref: refCallback,
        width: size.width,
        height: size.height,
    }); }, [refCallback, size ? size.width : null, size ? size.height : null]);
}

export { useResizeObserver as default };
//# sourceMappingURL=useResizeObserver.js.map
