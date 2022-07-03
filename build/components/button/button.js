import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import './styles.scss.js';

var Button = function (props) {
    var _a = props.className, className = _a === void 0 ? '' : _a, _b = props.buttonType, buttonType = _b === void 0 ? 'button' : _b, _c = props.href, href = _c === void 0 ? '' : _c, _d = props.target, target = _d === void 0 ? '_blank' : _d, type = props.type, size = props.size, _e = props.disabled, disabled = _e === void 0 ? false : _e, startIcon = props.startIcon, endIcon = props.endIcon, children = props.children, rest = __rest(props, ["className", "buttonType", "href", "target", "type", "size", "disabled", "startIcon", "endIcon", "children"]);
    var content = (React.createElement(React.Fragment, null,
        startIcon ? React.createElement("span", { className: "start-icon" }, startIcon) : undefined,
        children,
        endIcon ? React.createElement("span", { className: "end-icon" }, endIcon) : undefined));
    if (href && !disabled) {
        return (React.createElement("a", { href: href, target: target, className: "imiui-button ".concat(type, " size-").concat(size).concat(disabled ? ' disabled' : '').concat(className ? " ".concat(className) : '') }, content));
    }
    return (React.createElement("button", __assign({ type: buttonType, disabled: disabled, className: "imiui-button ".concat(type, " size-").concat(size).concat(disabled ? ' disabled' : '').concat(className ? " ".concat(className) : '') }, rest), content));
};

export { Button, Button as default };
//# sourceMappingURL=button.js.map
