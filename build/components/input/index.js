import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React, { Fragment } from 'react';
import CloseT2Icon from '../../icons/components/CloseT2Icon.js';
import './styles.scss.js';
import Card from '../card/index.js';

var Input = function (props) {
    var _a = props.renderOption, renderOption = _a === void 0 ? function () { } : _a, _b = props.options, options = _b === void 0 ? [] : _b, _c = props.placeholder, placeholder = _c === void 0 ? '' : _c, className = props.className, _d = props.withLabel, withLabel = _d === void 0 ? false : _d, _e = props.hint, hint = _e === void 0 ? '' : _e, _f = props.error, error = _f === void 0 ? '' : _f, _g = props.isError, isError = _g === void 0 ? false : _g, onClear = props.onClear, endIcon = props.endIcon, onEndIconClick = props.onEndIconClick, rest = __rest(props, ["renderOption", "options", "placeholder", "className", "withLabel", "hint", "error", "isError", "onClear", "endIcon", "onEndIconClick"]);
    var _h = React.useState(false), focused = _h[0], setFocused = _h[1];
    var onFocus = function () { return setFocused(true); };
    var onBlur = function () {
        var timer = setTimeout(function () {
            setFocused(false);
            clearTimeout(timer);
        }, 100);
    };
    var getInputWidth = function () {
        var minus = 32;
        if (onClear && endIcon) {
            minus += 60 + 16;
            return minus;
        }
        if (onClear || endIcon) {
            minus += 20 + 16;
            return minus;
        }
    };
    var onInputChange = function (event, option) {
        if (option) {
            event.target.value = option;
            rest.onChange(event);
        }
        else {
            rest.onChange(event);
        }
    };
    return (React.createElement(Fragment, null,
        React.createElement("div", { className: "imiui-input".concat(isError ? ' error' : '').concat(rest.disabled ? ' disabled' : '').concat(withLabel ? ' label' : '') },
            React.createElement("input", __assign({}, rest, { onFocus: onFocus, onBlur: onBlur, onChange: function (event) { return onInputChange(event, null); }, className: "t-label-regular-tiny".concat(className ? " ".concat(className) : ''), placeholder: placeholder, style: { width: "calc(100% - ".concat(getInputWidth(), "px") } })),
            withLabel && React.createElement("label", null, placeholder),
            React.createElement("div", { className: "icon-container" },
                onClear && !rest.disabled &&
                    React.createElement("button", { className: "icon close" },
                        React.createElement(CloseT2Icon, null)),
                onClear && endIcon && React.createElement("hr", null),
                endIcon &&
                    React.createElement("button", { className: "icon", onClick: onEndIconClick ? onEndIconClick() : function () { } }, endIcon)),
            focused && React.createElement(Card, { className: "autocomplete-options", variant: 'dialogue' }, options.map(function (option, index) {
                return (React.createElement("button", { key: index, onClick: function (event) { return onInputChange(event, option); }, className: 't-label-regular-tiny' }, renderOption(option)));
            }))),
        !error && hint && React.createElement("span", { className: "imiui-input-note hint t-label-regular-supertiny" }, hint),
        error && React.createElement("span", { className: "imiui-input-note error t-label-regular-supertiny" }, error)));
};

export { Input as default };
//# sourceMappingURL=index.js.map
