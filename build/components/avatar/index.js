import React, { useState } from 'react';
import './styles.scss.js';

var arrBgColor = ['#039be5', '#dce775', '#43a047', '#689f38', '#f9a825', '#ff8f00', '#ef6c00', '#37474f', '#607d8b', '#8d6e63', '#8d6e63', '#bf360c'];
var Avatar = function (props) {
    var _a = props.src, src = _a === void 0 ? '' : _a, _b = props.name, name = _b === void 0 ? '' : _b, _c = props.size, size = _c === void 0 ? 20 : _c;
    var _d = useState(false), isError = _d[0], setIsError = _d[1];
    var getBgColor = function (unitString) {
        var charIndex = 0;
        if (unitString && unitString.length > 0) {
            unitString.split('').map(function (char) {
                charIndex += char.charCodeAt(0);
            });
        }
        var bgIndex = Math.floor(charIndex % arrBgColor.length);
        return arrBgColor[bgIndex];
    };
    return (React.createElement("div", { className: "imiui-avatar" }, src && !isError
        ?
            React.createElement("img", { alt: '', src: src, onError: function () { return setIsError(true); }, className: "img img-".concat(size) })
        :
            React.createElement("div", { className: "img img-".concat(size), style: { background: getBgColor(name) } },
                React.createElement("span", null, name[0]))));
};

export { Avatar as default };
//# sourceMappingURL=index.js.map
