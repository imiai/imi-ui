import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React, { useState, useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside.js';
import MoreT2Icon from '../../icons/components/MoreT2Icon.js';
import Card from '../card/index.js';
import './styles.scss.js';

var Menu = function (props) {
    var children = props.children;
    var _a = useState('none'), displayStyle = _a[0], setDisplayStyle = _a[1];
    var ref = useRef(null);
    useOnClickOutside(ref, function () { return setDisplayStyle('none'); });
    return (React.createElement("div", { className: "imiui-button-menu", ref: ref },
        React.createElement("button", { className: "button", onClick: function () { setDisplayStyle(displayStyle === 'block' ? 'none' : 'block'); } },
            React.createElement(MoreT2Icon, { fill: "var(--imiui-gray-300)", width: 16, height: 16 })),
        React.createElement(Card, { id: 'menu-list-id', variant: 'dialogue', className: "menu-list", style: { display: displayStyle } }, children)));
};
var MenuItem = function (props) {
    var children = props.children, className = props.className, _a = props.onClick, onClick = _a === void 0 ? function () { } : _a, rest = __rest(props, ["children", "className", "onClick"]);
    var onItemClick = function (e) {
        onClick(e);
        var el = document.getElementById('menu-list-id');
        el.style.display = 'none';
    };
    return (React.createElement("button", __assign({ className: "imiui-menu-item".concat(className ? " ".concat(className) : '') }, rest, { onClick: onItemClick }), children));
};

export { MenuItem, Menu as default };
//# sourceMappingURL=index.js.map
