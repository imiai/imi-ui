import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React, { useState, useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside.js';
import ArrowDownSpecialIcon from '../../icons/components/ArrowDownSpecialIcon.js';
import Card from '../card/index.js';
import Input from '../input/index.js';
import './styles.scss.js';

var Select = function (props) {
    var options = props.options, rest = __rest(props, ["options"]);
    var _a = useState(false), showOptions = _a[0], setShowOptions = _a[1];
    var ref = useRef(null);
    useOnClickOutside(ref, function () { return setShowOptions(false); });
    var onInputChange = function (event, option) {
        if (option) {
            event.target.value = option;
            rest.onChange(event);
        }
        else {
            rest.onChange(event);
        }
        var timer = setTimeout(function () {
            setShowOptions(false);
            clearTimeout(timer);
        }, 50);
    };
    return (React.createElement("div", { className: "imiui-select", ref: ref, onClick: function () { return setShowOptions(true); } },
        React.createElement(Input, __assign({}, rest, { disabled: true, readOnly: true, withLabel: true, endIcon: React.createElement(ArrowDownSpecialIcon, { fill: "var(--imiui-gray-200)" }) })),
        showOptions && React.createElement(Card, { className: "options", variant: 'dialogue' }, options.map(function (option, index) {
            return (React.createElement("button", { key: index, onClick: function (event) { return onInputChange(event, option.value); }, className: 't-label-regular-tiny' },
                React.createElement("div", null, option.label)));
        }))));
};

export { Select as default };
//# sourceMappingURL=index.js.map
