import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import './styles.scss.js';

var ButtonFix = function (props) {
    var type = props.type, _a = props.href, href = _a === void 0 ? '' : _a, _b = props.target, target = _b === void 0 ? '_blank' : _b, _c = props.disabled, disabled = _c === void 0 ? false : _c, startIcon = props.startIcon, endIcon = props.endIcon, children = props.children, _d = props.className, className = _d === void 0 ? '' : _d, rest = __rest(props, ["type", "href", "target", "disabled", "startIcon", "endIcon", "children", "className"]);
    var content = (React.createElement(React.Fragment, null,
        startIcon ? React.createElement("span", { className: "start-icon" }, startIcon) : undefined,
        children,
        endIcon ? React.createElement("span", { className: "end-icon" }, endIcon) : undefined));
    if (href && !disabled) {
        return (React.createElement("div", { className: "imiui-button-fix" },
            React.createElement("a", { href: href, target: target, className: "imiui-button ".concat(type).concat(disabled ? ' disabled' : '').concat(className ? " ".concat(className) : '') }, content)));
    }
    return (React.createElement("div", { className: "imiui-button-fix" },
        React.createElement("button", __assign({ disabled: disabled, className: "imiui-button ".concat(type).concat(disabled ? ' disabled' : '').concat(className ? " ".concat(className) : '') }, rest), content)));
};

export { ButtonFix as default };
//# sourceMappingURL=button-fix.js.map
