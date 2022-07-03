import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React, { useRef, useState, useLayoutEffect, Fragment } from 'react';
import CloseT2Icon from '../../icons/components/CloseT2Icon.js';
import './styles.scss.js';
import Card from '../card/index.js';

var Input = function (props) {
    var ref = useRef(null);
    var _a = props.options, options = _a === void 0 ? [] : _a, _b = props.placeholder, placeholder = _b === void 0 ? '' : _b, className = props.className, _c = props.inputClassName, inputClassName = _c === void 0 ? '' : _c, _d = props.withLabel, withLabel = _d === void 0 ? false : _d, _e = props.hint, hint = _e === void 0 ? '' : _e, _f = props.error, error = _f === void 0 ? '' : _f, _g = props.isError, isError = _g === void 0 ? false : _g, onClear = props.onClear, endIcon = props.endIcon, onEndIconClick = props.onEndIconClick, _h = props.style, style = _h === void 0 ? {} : _h, rest = __rest(props, ["options", "placeholder", "className", "inputClassName", "withLabel", "hint", "error", "isError", "onClear", "endIcon", "onEndIconClick", "style"]);
    var _j = useState(false), focused = _j[0], setFocused = _j[1];
    var _k = useState({ top: 'calc(100% + 1px)', bottom: 'auto' }), optionsPosition = _k[0], setOptionsPosition = _k[1];
    var _l = useState(options), renderOptions = _l[0], setRenderOptions = _l[1];
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
    var onFocus = function () { return setFocused(true); };
    var onBlur = function () {
        var timer = setTimeout(function () {
            setFocused(false);
            clearTimeout(timer);
        }, 100);
    };
    var getInputWidth = function () {
        var minus = withLabel ? 36 : 0;
        if (onClear && endIcon) {
            minus += 60 + 16;
            return minus;
        }
        if (onClear || endIcon) {
            minus += 20 + 16;
            return minus;
        }
        return minus;
    };
    var onInputChange = function (event, option) {
        var _options = options.filter(function (item) { return item.label.includes(event.target.value); });
        setRenderOptions(_options);
        if (option) {
            event.target.value = option.value;
            rest.onChange(event);
        }
        else {
            rest.onChange(event);
        }
    };
    return (React.createElement(Fragment, null,
        React.createElement("div", { ref: ref, className: "imiui-input".concat(isError ? ' error' : '').concat(rest.disabled ? ' disabled' : '').concat(withLabel ? ' label' : '').concat(className ? " ".concat(className) : '') },
            React.createElement("input", __assign({}, rest, { onFocus: onFocus, onBlur: onBlur, onChange: function (event) { return onInputChange(event, null); }, className: "t-label-regular-tiny ".concat(inputClassName), placeholder: placeholder, style: __assign({ width: "calc(100% - ".concat(getInputWidth(), "px") }, style) })),
            withLabel && React.createElement("label", null, placeholder),
            React.createElement("div", { className: "icon-container" },
                onClear && !rest.disabled &&
                    React.createElement("button", { type: "button", className: "icon close" },
                        React.createElement(CloseT2Icon, null)),
                onClear && endIcon && React.createElement("hr", null),
                endIcon &&
                    React.createElement("button", { type: "button", className: "icon", onClick: onEndIconClick ? function () { return onEndIconClick(); } : function () { } }, endIcon)),
            focused && React.createElement(Card, { className: "autocomplete-options", variant: 'dialogue', style: __assign({}, optionsPosition) }, renderOptions.map(function (option, index) {
                return (React.createElement("button", { type: "button", key: index, onClick: function (event) { return onInputChange(event, option); }, className: "t-label-regular-tiny ".concat(option.value === rest.value ? 'active' : '') },
                    React.createElement("div", null, option.label)));
            }))),
        !error && hint && React.createElement("span", { className: "imiui-input-note hint t-label-regular-supertiny" }, hint),
        error && React.createElement("span", { className: "imiui-input-note error t-label-regular-supertiny" }, error)));
};

export { Input as default };
//# sourceMappingURL=index.js.map
