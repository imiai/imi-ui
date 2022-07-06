import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside.js';
import ArrowDownIcon from '../../icons/components/ArrowDownIcon.js';
import Card from '../card/index.js';
import Input from '../input/index.js';
import './styles.scss.js';

var SelectType1 = function (props) {
    var options = props.options, className = props.className, _a = props.inputClassName, inputClassName = _a === void 0 ? '' : _a; props.label; var withLabel = props.withLabel, selectingOption = props.selectingOption, rest = __rest(props, ["options", "className", "inputClassName", "label", "withLabel", "selectingOption"]);
    var _b = useState(false), showOptions = _b[0], setShowOptions = _b[1];
    var ref = useRef(null);
    var optionsRef = useRef(null);
    var _c = useState({ top: 'calc(100% + 1px)', bottom: 'auto' }), optionsPosition = _c[0], setOptionsPosition = _c[1];
    useLayoutEffect(function () {
        var el = ref.current;
        if (el) {
            var _height = options.length * 36;
            _height = _height > 330 ? 330 : _height;
            if (el.offsetParent.scrollHeight - el.offsetTop < _height) {
                setOptionsPosition({ top: 'auto', bottom: 'calc(100% + 1px)' });
            }
        }
    }, [ref]);
    useEffect(function () {
        if (showOptions && optionsRef) {
            var els = optionsRef.current.getElementsByClassName('active');
            if (els && els.length > 0) {
                var el = els[0];
                optionsRef.current.scrollTo({ top: el.offsetTop, left: 0 });
            }
        }
    }, [showOptions]);
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
    return (React.createElement("div", { className: "imiui-select-t1".concat(className ? " ".concat(className) : ''), ref: ref, onClick: function () { return setShowOptions(!showOptions); } },
        React.createElement(Input, __assign({}, rest, { value: (selectingOption === null || selectingOption === void 0 ? void 0 : selectingOption.label) || '', inputClassName: inputClassName, disabled: true, readOnly: true, withLabel: withLabel, endIcon: React.createElement(ArrowDownIcon, { fill: "var(--imiui-gray-200)", className: "arrow-icon".concat(showOptions ? ' rotate' : '') }) })),
        showOptions && React.createElement(Card, { ref: optionsRef, id: 'imiui-select-options-id', style: __assign({}, optionsPosition), className: "options", variant: 'dialogue' }, options.map(function (option, index) {
            return (React.createElement("button", { key: index, onClick: function (event) { return onInputChange(event, option); }, className: "t-label-regular-tiny ".concat(option.value === (selectingOption === null || selectingOption === void 0 ? void 0 : selectingOption.value) ? 'active' : '') },
                React.createElement("p", { className: "t-label-regular-supertiny" }, option.label)));
        }))));
};

export { SelectType1 as default };
//# sourceMappingURL=index.js.map
