import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React, { useState, useEffect } from 'react';
import CloseIcon from '../../icons/components/CloseIcon.js';
import './styles.scss.js';

var Inform = function (props) {
    var _a = props.closeable, closeable = _a === void 0 ? false : _a, icon = props.icon, severity = props.severity, content = props.content, className = props.className, rest = __rest(props, ["closeable", "icon", "severity", "content", "className"]);
    var _b = useState(true), visible = _b[0], setVisible = _b[1];
    var _c = useState(false), iconAlignTop = _c[0], setIconAlignTop = _c[1];
    var iconClone = React.isValidElement(icon) ? React.cloneElement(icon, { className: 'left-icon' }) : icon;
    useEffect(function () {
        var el = document.getElementById('imiui-inform');
        if (el && el.clientHeight > 52) {
            setIconAlignTop(true);
        }
        else {
            setIconAlignTop(false);
        }
    }, []);
    if (!visible) {
        return React.createElement(React.Fragment, null);
    }
    return (React.createElement("div", __assign({ id: 'imiui-inform' }, rest, { className: "imiui-inform ".concat(severity).concat(className ? " ".concat(className) : '').concat(iconAlignTop ? " icon-align-top" : '') }),
        iconClone,
        React.createElement("p", { className: "content t-label-regular-supertiny m-0" }, content),
        closeable && React.createElement("button", { onClick: function () { return setVisible(false); }, className: 'close-button' },
            React.createElement(CloseIcon, { className: "close-icon" }))));
};

export { Inform as default };
//# sourceMappingURL=index.js.map
