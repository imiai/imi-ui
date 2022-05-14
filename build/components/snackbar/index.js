import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import CheckIcon from '../../icons/components/CheckIcon.js';
import CloseIcon from '../../icons/components/CloseIcon.js';
import CloseT2Icon from '../../icons/components/CloseT2Icon.js';
import WarningIcon from '../../icons/components/WarningIcon.js';
import InfoIcon from '../../icons/components/InfoIcon.js';
import './styles.scss.js';

var SnackbarJsx = function (props) {
    var content = props.content, _a = props.autoHideDuration, autoHideDuration = _a === void 0 ? 6000 : _a, onClose = props.onClose, open = props.open, _b = props.type, type = _b === void 0 ? 'info' : _b;
    var _c = useState(open), openSnackbar = _c[0], setOpenSnackbar = _c[1];
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
    return (React.createElement("div", { className: "imiui-snackbar ".concat(type, " ").concat(openSnackbar ? 'show' : '') },
        type === 'info' && React.createElement(InfoIcon, { fill: "var(--imiui-primary-white)" }),
        type === 'success' && React.createElement(CheckIcon, { fill: "var(--imiui-primary-white)" }),
        type === 'warning' && React.createElement(WarningIcon, { fill: "var(--imiui-primary-white)" }),
        type === 'error' && React.createElement(CloseT2Icon, { fill: "var(--imiui-primary-white)" }),
        React.createElement("span", { className: "message t-label-regular-tiny m-0" }, content),
        React.createElement("button", { onClick: function () { return onClose(); }, className: 'close-button' },
            React.createElement(CloseIcon, { fill: "var(--imiui-primary-white)" }))));
};
var Snackbar = function (props) {
    return ReactDOM.createPortal(React.createElement(SnackbarJsx, __assign({}, props)), document.querySelector('body'));
};

export { Snackbar as default };
//# sourceMappingURL=index.js.map
