import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React, { Fragment } from 'react';
import CloseT2Icon from '../../icons/components/CloseT2Icon.js';
import './styles.scss.js';

var Input = function (props) {
    var _a = props.placeholder, placeholder = _a === void 0 ? '' : _a, className = props.className, _b = props.withLabel, withLabel = _b === void 0 ? false : _b, _c = props.hint, hint = _c === void 0 ? '' : _c, _d = props.error, error = _d === void 0 ? '' : _d, _e = props.isError, isError = _e === void 0 ? false : _e, onClear = props.onClear, endIcon = props.endIcon, onEndIconClick = props.onEndIconClick, rest = __rest(props, ["placeholder", "className", "withLabel", "hint", "error", "isError", "onClear", "endIcon", "onEndIconClick"]);
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
    return (React.createElement(Fragment, null,
        React.createElement("div", { className: "imiui-input".concat(isError ? ' error' : '').concat(rest.disabled ? ' disabled' : '').concat(withLabel ? ' label' : '') },
            React.createElement("input", __assign({}, rest, { className: "t-label-regular-tiny".concat(className ? " ".concat(className) : ''), placeholder: placeholder, style: { width: "calc(100% - ".concat(getInputWidth(), "px") } })),
            withLabel && React.createElement("label", null, placeholder),
            React.createElement("div", { className: "icon-container" },
                onClear && !rest.disabled &&
                    React.createElement("button", { className: "icon close" },
                        React.createElement(CloseT2Icon, null)),
                onClear && endIcon && React.createElement("hr", null),
                endIcon &&
                    React.createElement("button", { className: "icon", onClick: onEndIconClick ? onEndIconClick() : function () { } }, endIcon))),
        !error && hint && React.createElement("span", { className: "imiui-input-note hint t-label-regular-supertiny" }, hint),
        error && React.createElement("span", { className: "imiui-input-note error t-label-regular-supertiny" }, error)));
};

export { Input as default };
//# sourceMappingURL=index.js.map
