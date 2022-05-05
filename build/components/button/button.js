import { __rest, __assign } from '../../opt/homebrew/Cellar/node/17.3.0/lib/node_modules/tslib/tslib.es6.js';
import React from 'react';
import './styles.scss.js';

var Button = function (props) {
    var _a = props.className, className = _a === void 0 ? '' : _a, _b = props.href, href = _b === void 0 ? '' : _b, _c = props.target, target = _c === void 0 ? '_blank' : _c, type = props.type, size = props.size, _d = props.disabled, disabled = _d === void 0 ? false : _d, startIcon = props.startIcon, endIcon = props.endIcon, children = props.children, rest = __rest(props, ["className", "href", "target", "type", "size", "disabled", "startIcon", "endIcon", "children"]);
    var content = (React.createElement(React.Fragment, null,
        startIcon ? React.createElement("span", { className: "start-icon" }, startIcon) : undefined,
        children,
        endIcon ? React.createElement("span", { className: "end-icon" }, endIcon) : undefined));
    if (href && !disabled) {
        return (React.createElement("a", { href: href, target: target, className: "imiui-button ".concat(type, " size-").concat(size).concat(disabled ? ' disabled' : '').concat(className ? " ".concat(className) : '') }, content));
    }
    return (React.createElement("button", __assign({ disabled: disabled, className: "imiui-button ".concat(type, " size-").concat(size).concat(disabled ? ' disabled' : '').concat(className ? " ".concat(className) : '') }, rest), content));
};

export { Button, Button as default };
//# sourceMappingURL=button.js.map
