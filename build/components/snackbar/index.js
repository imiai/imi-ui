import React, { useState, useEffect, useCallback } from 'react';
import './styles.scss.js';

var Snackbar = function (props) {
    var _a = props.titleClassName, titleClassName = _a === void 0 ? '' : _a, icon = props.icon, title = props.title, content = props.content, _b = props.autoHideDuration, autoHideDuration = _b === void 0 ? 6000 : _b, onClose = props.onClose, open = props.open, _c = props.anchorOrigin, anchorOrigin = _c === void 0 ? { horizontal: 'center', vertical: 'top' } : _c;
    var _d = useState(open), openSnackbar = _d[0], setOpenSnackbar = _d[1];
    useEffect(function () {
        var id = setTimeout(function () {
            setOpenSnackbar(open);
        }, 50);
        return function () { return clearTimeout(id); };
    }, [open]);
    var onCloseSnackbar = useCallback(function () {
        setOpenSnackbar(false);
        var timer = setTimeout(function () {
            onClose && onClose();
            clearTimeout(timer);
        }, 200);
    }, [onClose]);
    var setAutoHideTimer = useCallback(function (autoHideDuration) {
        if (!onClose) {
            return;
        }
        var timer = setTimeout(function () {
            onCloseSnackbar();
            clearTimeout(timer);
        }, autoHideDuration);
    }, [onClose, onCloseSnackbar]);
    useEffect(function () {
        if (open && autoHideDuration) {
            setAutoHideTimer(autoHideDuration);
        }
    }, [open, autoHideDuration, setAutoHideTimer]);
    if (!open) {
        return React.createElement(React.Fragment, null);
    }
    return (React.createElement("div", { className: "imiui-snackbar ".concat(anchorOrigin.horizontal, " ").concat(openSnackbar ? 'show' : '', " ").concat(anchorOrigin.vertical) },
        icon,
        React.createElement("p", { className: "message t-label-regular-tiny m-0" },
            React.createElement("span", { className: "title ".concat(titleClassName) }, title),
            " ",
            React.createElement("span", null, content))));
};

export { Snackbar as default };
//# sourceMappingURL=index.js.map
