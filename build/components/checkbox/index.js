import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import CheckboxSquareCheckedIcon from '../../icons/components/CheckboxSquareCheckedIcon.js';
import CheckboxSquareUncheckedIcon from '../../icons/components/CheckboxSquareUncheckedIcon.js';
import './styles.scss.js';

var Checkbox = function (props) {
    var label = props.label, _a = props.labelClassName, labelClassName = _a === void 0 ? 't-label-regular-tiny ' : _a, rest = __rest(props, ["label", "labelClassName"]);
    return (React.createElement("label", { className: "imiui-checkbox" },
        React.createElement("input", __assign({}, rest, { type: "checkbox" })),
        React.createElement("span", { className: labelClassName }, label),
        React.createElement("span", { className: "checkmark" },
            React.createElement(CheckboxSquareCheckedIcon, { fill: "var(--imiui-primary-blue)", className: "svg-checked" }),
            React.createElement(CheckboxSquareUncheckedIcon, { className: "svg-unchecked" }))));
};

export { Checkbox as default };
//# sourceMappingURL=index.js.map
