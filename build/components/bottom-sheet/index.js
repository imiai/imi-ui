import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import React, { useState, useEffect, useCallback } from 'react';
import CloseIcon from '../../icons/components/CloseIcon.js';
import ReactDOM from 'react-dom';
import './styles.scss.js';
import useResizeObserver from '../../hooks/useResizeObserver.js';

var BottomSheetJsx = function (props) {
    var title = props.title, _a = props.open, open = _a === void 0 ? false : _a, headrLeftIcon = props.headrLeftIcon, _b = props.clickOutsideToClose, clickOutsideToClose = _b === void 0 ? false : _b, _c = props.onClose, onClose = _c === void 0 ? function () { } : _c, _d = props.onIconClick, onIconClick = _d === void 0 ? function () { } : _d, children = props.children, className = props.className;
    var _e = useState(false), isStartDragging = _e[0], setIsStartDragging = _e[1];
    var _f = useState("".concat(window.innerHeight + 12, "px")), positionTop = _f[0], setPositionTop = _f[1];
    var _g = useState("".concat(window.innerHeight + 12, "px")), initTop = _g[0], setInitTop = _g[1];
    var _h = useState(0), opacity = _h[0], setOpacity = _h[1];
    var _j = useState(open), openSheet = _j[0], setOpenSheet = _j[1];
    var _k = useResizeObserver(), ref = _k.ref; _k.width; var _m = _k.height, height = _m === void 0 ? 1 : _m;
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
        var headerHeight = title ? 48 : 40;
        var contentHeight = height;
        var bottomSheetHeight = headerHeight + contentHeight;
        var maxTop = window.innerHeight * 0.1 - headerHeight;
        if (el && openSheet) {
            if (window.innerHeight - bottomSheetHeight > maxTop) {
                setPositionTop("".concat(window.innerHeight - bottomSheetHeight, "px"));
                setInitTop("".concat(window.innerHeight - bottomSheetHeight, "px"));
            }
            else {
                setPositionTop("".concat(maxTop, "px"));
                setInitTop("".concat(maxTop, "px"));
            }
        }
        setOpacity(0.7);
    }, [openSheet, height]);
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
    return (React.createElement("div", { id: 'imiui-bottom-sheet-wrapper', className: "imiui-bottomsheet".concat(className ? " ".concat(className) : '') },
        React.createElement("div", { className: "overlay", style: { opacity: opacity }, onClick: clickOutsideToClose ? onCloseSheet : function () { } }),
        React.createElement("div", { id: 'imiui-bottomsheet-container', className: "container", style: { top: positionTop } },
            React.createElement("div", { className: "header", style: title ? { height: 48 } : {}, onTouchStart: startDrag, onMouseDown: startDrag },
                React.createElement("div", { className: "indicator" }),
                React.createElement("button", { className: "icon", onClick: function () { return onIconClick(); } }, headrLeftIcon),
                React.createElement("span", { className: "title t-label-bold-small" }, title),
                React.createElement("button", { className: "close", onClick: onCloseSheet },
                    React.createElement(CloseIcon, null))),
            React.createElement("div", { ref: ref, className: "content" }, children))));
};
var BottomSheet = function (props) {
    return ReactDOM.createPortal(React.createElement(BottomSheetJsx, __assign({}, props)), document.querySelector('body'));
};

export { BottomSheet as default };
//# sourceMappingURL=index.js.map
