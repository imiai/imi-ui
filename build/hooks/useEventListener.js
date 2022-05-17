import { useRef, useEffect } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect.js';

function useEventListener(eventName, handler, element) {
    // Create a ref that stores handler
    var savedHandler = useRef(handler);
    useIsomorphicLayoutEffect(function () {
        savedHandler.current = handler;
    }, [handler]);
    useEffect(function () {
        // Define the listening target
        var targetElement = (element === null || element === void 0 ? void 0 : element.current) || window;
        if (!(targetElement && targetElement.addEventListener)) {
            return;
        }
        // Create event listener that calls handler function stored in ref
        var eventListener = function (event) { return savedHandler.current(event); };
        targetElement.addEventListener(eventName, eventListener);
        // Remove event listener on cleanup
        return function () {
            targetElement.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element]);
}

export { useEventListener as default };
//# sourceMappingURL=useEventListener.js.map
