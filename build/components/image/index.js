import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React, { useState } from 'react';
import HomeIcon from '../../icons/components/ImagePlaceholderIcon.js';
import './styles.scss.js';

var Image = function (props) {
    var _a = useState(false), isError = _a[0], setIsError = _a[1];
    var className = props.className, src = props.src, rest = __rest(props, ["className", "src"]);
    var onError = function () {
        setIsError(true);
    };
    if (isError) {
        return (React.createElement("div", { className: "imiui-image placeholder".concat(className ? " ".concat(className) : '') },
            React.createElement(HomeIcon, null)));
    }
    return (React.createElement("img", __assign({ alt: '' }, rest, { src: src || '', className: "imiui-image".concat(className ? " ".concat(className) : ''), onError: onError })));
};

export { Image as default };
//# sourceMappingURL=index.js.map
