import useEventListener from './useEventListener.js';

function useOnClickOutside(ref, handler, mouseEvent) {
    if (mouseEvent === void 0) { mouseEvent = 'mousedown'; }
    useEventListener(mouseEvent, function (event) {
        var el = ref === null || ref === void 0 ? void 0 : ref.current;
        // Do nothing if clicking ref's element or descendent elements
        if (!el || el.contains(event.target)) {
            return;
        }
        handler(event);
    });
}

export { useOnClickOutside as default };
//# sourceMappingURL=useOnClickOutside.js.map
