import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import CloseIcon from '../../icons/components/CloseIcon.js';
import './styles.scss.js';

var Chip = function (props) {
    var _a = props.size, size = _a === void 0 ? 32 : _a, content = props.content, _b = props.isSelected, isSelected = _b === void 0 ? false : _b, onClose = props.onClose, iconLeft = props.iconLeft, className = props.className, rest = __rest(props, ["size", "content", "isSelected", "onClose", "iconLeft", "className"]);
    if (onClose) {
        return (React.createElement("div", { className: "imiui-chip size_".concat(size, " ").concat(isSelected ? 'selected' : 'unselected', " ").concat(className) },
            iconLeft ? React.createElement("div", { className: "left-icon" }, iconLeft) : React.createElement(React.Fragment, null),
            React.createElement("p", { className: 't-body-regular-small' }, content),
            onClose &&
                React.createElement("button", { className: "close-icon" },
                    React.createElement(CloseIcon, { width: 16, height: 16, fill: "".concat(isSelected ? 'var(--imiui-primary-blue)' : 'var(--imiui-primary-dark)') }))));
    }
    return (React.createElement("button", __assign({ style: { cursor: 'pointer' }, className: "imiui-chip size_".concat(size, " ").concat(isSelected ? 'selected' : 'unselected', " ").concat(className) }, rest),
        iconLeft ? React.createElement("div", { className: "left-icon" }, iconLeft) : React.createElement(React.Fragment, null),
        React.createElement("p", { className: 't-body-regular-small' }, content)));
};

export { Chip as default };
//# sourceMappingURL=index.js.map
