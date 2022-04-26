import React, { useState, useEffect, useCallback } from 'react';
import CloseIcon from '../../icons/components/CloseIcon.js';
import './styles.scss.js';

var BottomSheet = function (props) {
    var title = props.title, _a = props.open, open = _a === void 0 ? false : _a, headrLeftIcon = props.headrLeftIcon, _b = props.clickOutsideToClose, clickOutsideToClose = _b === void 0 ? false : _b, _c = props.onClose, onClose = _c === void 0 ? function () { } : _c, _d = props.onIconClick, onIconClick = _d === void 0 ? function () { } : _d, children = props.children;
    var _e = useState(false), isStartDragging = _e[0], setIsStartDragging = _e[1];
    var _f = useState("".concat(window.innerHeight + 12, "px")), positionTop = _f[0], setPositionTop = _f[1];
    var _g = useState("".concat(window.innerHeight + 12, "px")), initTop = _g[0], setInitTop = _g[1];
    var _h = useState(0), opacity = _h[0], setOpacity = _h[1];
    var _j = useState(open), openSheet = _j[0], setOpenSheet = _j[1];
    useEffect(function () {
        var id = setTimeout(function () {
            setOpenSheet(open);
        }, 50);
        return function () { return clearTimeout(id); };
    }, [open]);
    useEffect(function () {
        document.body.style.overflow = 'hidden';
        return function () { document.body.style.overflow = 'unset'; };
    }, []);
    useEffect(function () {
        var el = document.getElementById('imiui-bottomsheet-container');
        if (el && openSheet) {
            setPositionTop("".concat(window.innerHeight - el.scrollHeight, "px"));
            setInitTop("".concat(window.innerHeight - el.scrollHeight, "px"));
        }
        setOpacity(0.7);
    }, [openSheet]);
    var onCloseSheet = useCallback(function () {
        setPositionTop("".concat(window.innerHeight + 12, "px"));
        setOpacity(0);
        var timer = setTimeout(function () {
            setOpenSheet(false);
            clearTimeout(timer);
            onClose();
        }, 100);
    }, [onClose]);
    var startDrag = function () {
        setIsStartDragging(true);
    };
    var stopStartDrag = useCallback(function (event) {
        var yPos = event.clientY;
        if (event.type === 'touchstart' || event.type === 'touchmove' || event.type === 'touchend' || event.type === 'touchcancel') {
            var touch = event.touches[0] || event.changedTouches[0];
            yPos = touch.pageY;
        }
        if ((window.innerHeight - yPos) < 100) {
            setPositionTop("".concat(window.innerHeight + 12, "px"));
            onCloseSheet();
        }
        else {
            setPositionTop(initTop);
        }
        setIsStartDragging(false);
    }, [initTop, onCloseSheet]);
    var doStartDrag = useCallback(function (event) {
        if (!isStartDragging) {
            return;
        }
        var yPos = event.clientY;
        if (event.type === 'touchstart' || event.type === 'touchmove' || event.type === 'touchend' || event.type === 'touchcancel') {
            var touch = event.touches[0] || event.changedTouches[0];
            yPos = touch.pageY;
        }
        if (yPos < parseInt(initTop.slice(0, -2))) {
            return;
        }
        setPositionTop("".concat(yPos, "px"));
    }, [initTop, isStartDragging]);
    useEffect(function () {
        if (isStartDragging) {
            document.documentElement.addEventListener('mousemove', doStartDrag);
            document.documentElement.addEventListener('mouseup', stopStartDrag);
            document.documentElement.addEventListener('touchmove', doStartDrag);
            document.documentElement.addEventListener('touchend', stopStartDrag);
        }
        return function () {
            if (isStartDragging) {
                document.documentElement.removeEventListener('mousemove', doStartDrag);
                document.documentElement.removeEventListener('mouseup', stopStartDrag);
                document.documentElement.removeEventListener('touchmove', doStartDrag);
                document.documentElement.removeEventListener('touchend', stopStartDrag);
            }
        };
    }, [isStartDragging, doStartDrag, stopStartDrag]);
    if (!openSheet) {
        return React.createElement(React.Fragment, null);
    }
    return (React.createElement("div", { className: "imiui-bottomsheet" },
        React.createElement("div", { className: "overlay", style: { opacity: opacity }, onClick: clickOutsideToClose ? onCloseSheet : function () { } }),
        React.createElement("div", { id: 'imiui-bottomsheet-container', className: "container", onTouchStart: startDrag, onMouseDown: startDrag, style: { top: positionTop } },
            React.createElement("div", { className: "header", style: title ? { height: 44 } : {} },
                React.createElement("div", { className: "indicator" }),
                React.createElement("button", { className: "icon", onClick: function () { return onIconClick(); } }, headrLeftIcon),
                React.createElement("span", { className: "title t-label-bold-small" }, title),
                React.createElement("button", { className: "close", onClick: onCloseSheet },
                    React.createElement(CloseIcon, null))),
            React.createElement("div", { className: "content" }, children))));
};

export { BottomSheet as default };
//# sourceMappingURL=index.js.map
