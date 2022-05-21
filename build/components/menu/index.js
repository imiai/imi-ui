import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React, { useState, useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside.js';
import MoreT2Icon from '../../icons/components/MoreT2Icon.js';
import Card from '../card/index.js';
import './styles.scss.js';

var Menu = function (props) {
    var children = props.children;
    var _a = useState(false), showItem = _a[0], setShowItem = _a[1];
    var ref = useRef(null);
    useOnClickOutside(ref, function () { return setShowItem(false); });
    return (React.createElement("div", { className: "imiui-button-menu", ref: ref },
        React.createElement("button", { className: "button", onClick: function () { setShowItem(!showItem); } },
            React.createElement(MoreT2Icon, { fill: "var(--imiui-gray-300)", width: 16, height: 16 })),
        showItem &&
            React.createElement(Card, { variant: 'dialogue', className: "menu-list" }, children)));
};
var MenuItem = function (props) {
    var children = props.children, className = props.className, rest = __rest(props, ["children", "className"]);
    return (React.createElement("button", __assign({ className: "imiui-menu-item".concat(className ? " ".concat(className) : '') }, rest), children));
};

export { MenuItem, Menu as default };
//# sourceMappingURL=index.js.map
