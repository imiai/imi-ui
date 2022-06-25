import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import CheckboxSquareCheckedIcon from '../../icons/components/CheckboxSquareCheckedIcon.js';
import CheckboxSquareUncheckedIcon from '../../icons/components/CheckboxSquareUncheckedIcon.js';
import './styles.scss.js';

var Checkbox = function (props) {
    var label = props.label, rest = __rest(props, ["label"]);
    return (React.createElement("label", { className: "imiui-checkbox" },
        React.createElement("input", __assign({}, rest, { type: "checkbox" })),
        React.createElement("span", { className: "t-label-regular-tiny" }, label),
        React.createElement("span", { className: "checkmark" },
            React.createElement(CheckboxSquareCheckedIcon, { fill: "var(--imiui-primary-blue)", className: "svg-checked" }),
            React.createElement(CheckboxSquareUncheckedIcon, { className: "svg-unchecked" }))));
};

export { Checkbox as default };
//# sourceMappingURL=index.js.map
