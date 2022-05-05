import { __rest, __assign } from '../../opt/homebrew/Cellar/node/17.3.0/lib/node_modules/tslib/tslib.es6.js';
import React, { Fragment } from 'react';
import './styles.scss.js';

var TextArea = function (props) {
    var _a = props.showLengthCounter, showLengthCounter = _a === void 0 ? false : _a, _b = props.className, className = _b === void 0 ? '' : _b, _c = props.maxLength, maxLength = _c === void 0 ? 320 : _c, _d = props.label, label = _d === void 0 ? '' : _d, _e = props.placeholder, placeholder = _e === void 0 ? '' : _e, _f = props.hint, hint = _f === void 0 ? '' : _f, _g = props.error, error = _g === void 0 ? '' : _g, _h = props.isError, isError = _h === void 0 ? false : _h, rest = __rest(props, ["showLengthCounter", "className", "maxLength", "label", "placeholder", "hint", "error", "isError"]);
    var handleKeyDown = function (e) {
        e.target.style.height = 'inherit';
        e.target.style.height = "".concat(Math.min(e.target.scrollHeight, 72), "px");
        rest.onChange && rest.onChange(e);
    };
    return (React.createElement(Fragment, null,
        React.createElement("div", { className: "imiui-textarea".concat(isError ? ' error' : '').concat(rest.disabled ? ' disabled' : '').concat(label ? ' label' : '') },
            React.createElement("textarea", __assign({}, rest, { className: "t-body-regular-small ".concat(className ? " ".concat(className) : ''), maxLength: maxLength, placeholder: placeholder, onChange: handleKeyDown })),
            label && React.createElement("label", null, label),
            showLengthCounter && React.createElement("span", { className: "length-counter t-label-regular-supertiny" },
                rest.value ? rest.value.toString().length : 0,
                "/",
                maxLength)),
        !error && hint && React.createElement("span", { className: "imiui-textarea-note hint t-label-regular-supertiny" }, hint),
        error && React.createElement("span", { className: "imiui-textarea-note error t-label-regular-supertiny" }, error)));
};

export { TextArea as default };
//# sourceMappingURL=index.js.map
