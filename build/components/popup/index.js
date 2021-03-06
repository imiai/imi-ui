import { __assign, __rest } from '../../node_modules/tslib/tslib.es6.js';
import { Button } from '../button/button.js';
import Image from '../image/index.js';
import React, { useState, useEffect } from 'react';
import CloseIcon from '../../icons/components/CloseIcon.js';
import CloseT2Icon from '../../icons/components/CloseT2Icon.js';
import ReactDOM from 'react-dom';
import './styles.scss.js';

var PopupHeader = function (props) {
    var title = props.title, onClose = props.onClose;
    return (React.createElement("div", { className: 'imi-popup-header' },
        React.createElement("span", { className: 't-heading-bold-small c-primary-dark' }, title),
        React.createElement("button", { onClick: onClose },
            React.createElement(CloseIcon, { width: 24, height: 24, fill: 'var(--imiui-primary-dark)' }))));
};
var PopupBody = function (props) {
    var children = props.children, className = props.className;
    return (React.createElement("div", { className: "imi-popup-body".concat(className ? " ".concat(className) : '') }, children));
};
var PopupJsx = function (props) {
    var _a = props.open, open = _a === void 0 ? false : _a, _b = props.clickOutsideToClose, clickOutsideToClose = _b === void 0 ? true : _b, _c = props.onClose, onClose = _c === void 0 ? function () { } : _c, title = props.title, subTitle = props.subTitle, image = props.image, imageSize = props.imageSize, mainButton = props.mainButton, _d = props.onMainButtonClick, onMainButtonClick = _d === void 0 ? function () { } : _d, subButton = props.subButton, _e = props.onSubButtonClick, onSubButtonClick = _e === void 0 ? function () { } : _e, children = props.children, className = props.className, rest = __rest(props, ["open", "clickOutsideToClose", "onClose", "title", "subTitle", "image", "imageSize", "mainButton", "onMainButtonClick", "subButton", "onSubButtonClick", "children", "className"]);
    var _f = useState(open), openPopup = _f[0], setOpenPopup = _f[1];
    var _g = useState(false), showContent = _g[0], setShowContent = _g[1];
    useEffect(function () {
        setOpenPopup(open);
        var id = setTimeout(function () { return setShowContent(open); }, 50);
        return function () { return clearTimeout(id); };
    }, [open]);
    useEffect(function () {
        if (openPopup) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }
    }, [openPopup]);
    if (!openPopup) {
        return (React.createElement(React.Fragment, null));
    }
    return (React.createElement("div", __assign({ id: 'imiui-popup-wrapper' }, rest, { className: "imiui-popup".concat(className ? " ".concat(className) : '') }),
        React.createElement("div", { className: "content".concat(children ? '' : " ".concat(imageSize)).concat(showContent ? " popup-with-anim" : '', " ") }, children ?
            children
            :
                React.createElement(React.Fragment, null,
                    React.createElement("button", { className: "close", onClick: onClose }, imageSize === 'large' ? React.createElement(CloseT2Icon, null) : React.createElement(CloseIcon, null)),
                    imageSize === 'large' && React.createElement(Image, { alt: 'popup-img', src: image, className: "image" }),
                    React.createElement("div", { className: "wrapper" },
                        imageSize === 'small' && React.createElement(Image, { alt: 'popup-img', src: image, className: "image" }),
                        React.createElement("span", { className: "title t-label-bold-small" }, title),
                        React.createElement("span", { className: "sub-title t-label-regular-tiny" }, subTitle),
                        React.createElement("div", { className: "button-container" },
                            React.createElement(Button, { type: 'primary', size: 40, className: 'main-button', onClick: onMainButtonClick }, mainButton),
                            subButton && React.createElement(Button, { type: imageSize !== 'none' ? 'tertiary' : 'secondary', size: 40, className: 'sub-button', onClick: onSubButtonClick }, subButton))))),
        open && React.createElement("div", { className: "overlay", onClick: clickOutsideToClose ? onClose : function () { } })));
};
var Popup = function (props) {
    return ReactDOM.createPortal(React.createElement(PopupJsx, __assign({}, props)), document.querySelector('body'));
};

export { PopupBody, PopupHeader, Popup as default };
//# sourceMappingURL=index.js.map
