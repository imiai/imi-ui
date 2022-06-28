import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React, { useState, useRef, useLayoutEffect } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside.js';
import ArrowDownIcon from '../../icons/components/ArrowDownIcon.js';
import Card from '../card/index.js';
import Input from '../input/index.js';
import './styles.scss.js';

var Select = function (props) {
    var options = props.options, className = props.className, _a = props.inputClassName, inputClassName = _a === void 0 ? '' : _a, withLabel = props.withLabel, rest = __rest(props, ["options", "className", "inputClassName", "withLabel"]);
    var _b = useState(false), showOptions = _b[0], setShowOptions = _b[1];
    var ref = useRef(null);
    var optionsRef = useRef(null);
    var _c = useState({ top: 'calc(100% + 1px)', bottom: 'auto' }), optionsPosition = _c[0], setOptionsPosition = _c[1];
    useLayoutEffect(function () {
        var el = ref.current;
        var opEl = optionsRef.current;
        if (el && opEl) {
            if (el.offsetParent.clientHeight - el.offsetTop < opEl.offsetHeight) {
                setOptionsPosition({ top: 'auto', bottom: 'calc(100% + 1px)' });
            }
        }
    }, [ref, optionsRef]);
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
    return (React.createElement("div", { className: "imiui-select".concat(className ? " ".concat(className) : ''), ref: ref, onClick: function () { return setShowOptions(!showOptions); } },
        React.createElement(Input, __assign({}, rest, { inputClassName: inputClassName, disabled: true, readOnly: true, withLabel: withLabel, endIcon: React.createElement(ArrowDownIcon, { fill: "var(--imiui-gray-200)", className: "arrow-icon".concat(showOptions ? ' rotate' : '') }) })),
        React.createElement(Card, { ref: optionsRef, id: 'imiui-select-options-id', style: __assign(__assign({}, optionsPosition), { visibility: showOptions ? 'visible' : 'hidden' }), className: "options", variant: 'dialogue' }, options.map(function (option, index) {
            return (React.createElement("button", { key: index, onClick: function (event) { return onInputChange(event, option); }, className: 't-label-regular-tiny' },
                React.createElement("div", null, option.label)));
        }))));
};

export { Select as default };
//# sourceMappingURL=index.js.map
