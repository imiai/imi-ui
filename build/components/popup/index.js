import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import { Button } from '../button/button.js';
import Image from '../image/index.js';
import React, { useState, useEffect } from 'react';
import CloseIcon from '../../icons/components/CloseIcon.js';
import CloseT2Icon from '../../icons/components/CloseT2Icon.js';
import './styles.scss.js';

var Popup = function (props) {
    var _a = props.open, open = _a === void 0 ? false : _a, _b = props.clickOutsideToClose, clickOutsideToClose = _b === void 0 ? true : _b, _c = props.onClose, onClose = _c === void 0 ? function () { } : _c, title = props.title, subTitle = props.subTitle, image = props.image, imageSize = props.imageSize; props.mainButton; props.onMainButtonClick; props.subButton; props.onSubButtonClick; var rest = __rest(props, ["open", "clickOutsideToClose", "onClose", "title", "subTitle", "image", "imageSize", "mainButton", "onMainButtonClick", "subButton", "onSubButtonClick"]);
    var _d = useState(open), openPopup = _d[0], setOpenPopup = _d[1];
    var _e = useState(false), showContent = _e[0], setShowContent = _e[1];
    useEffect(function () {
        setOpenPopup(open);
        var id = setTimeout(function () { return setShowContent(open); }, 50);
        return function () { return clearTimeout(id); };
    }, [open]);
    if (!openPopup) {
        return (React.createElement(React.Fragment, null));
    }
    return (React.createElement("div", __assign({}, rest, { className: 'imiui-popup' }),
        React.createElement("div", { className: "content ".concat(imageSize, " ").concat(showContent ? " popup-with-anim" : '', " ") },
            React.createElement("button", { className: "close", onClick: onClose }, imageSize === 'large' ? React.createElement(CloseT2Icon, null) : React.createElement(CloseIcon, null)),
            imageSize === 'large' && React.createElement(Image, { alt: 'popup-img', src: image, className: "image" }),
            React.createElement("div", { className: "wrapper" },
                imageSize === 'small' && React.createElement(Image, { alt: 'popup-img', src: image, className: "image" }),
                React.createElement("span", { className: "title t-label-bold-small" }, title),
                React.createElement("span", { className: "sub-title t-label-regular-tiny" }, subTitle),
                React.createElement("div", { className: "button-container" },
                    React.createElement(Button, { type: 'primary', size: 40, className: 'main-button' }, "Main button"),
                    React.createElement(Button, { type: imageSize !== 'none' ? 'tertiary' : 'secondary', size: 40, className: 'sub-button' }, "Sub button")))),
        open && React.createElement("div", { className: "overlay", onClick: clickOutsideToClose ? onClose : function () { } })));
};

export { Popup as default };
//# sourceMappingURL=index.js.map