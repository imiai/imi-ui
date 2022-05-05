import { __rest, __assign } from '../../opt/homebrew/Cellar/node/17.3.0/lib/node_modules/tslib/tslib.es6.js';
import React from 'react';
import RadioCheckedIcon from '../../icons/components/RadioCheckedIcon.js';
import RadioUncheckedIcon from '../../icons/components/RadioUncheckedIcon.js';
import './styles.scss.js';

var Radio = function (props) {
    var label = props.label, rest = __rest(props, ["label"]);
    return (React.createElement("label", { className: "imiui-radio" },
        React.createElement("input", __assign({}, rest, { type: "radio" })),
        React.createElement("span", { className: 't-label-regular-tiny' }, label),
        React.createElement("span", { className: "checkmark ripple" },
            React.createElement(RadioCheckedIcon, { fill: "var(--imiui-primary-blue)", className: "svg-checked" }),
            React.createElement(RadioUncheckedIcon, { className: "svg-unchecked" }))));
};

export { Radio as default };
//# sourceMappingURL=index.js.map
