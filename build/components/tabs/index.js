import React, { useState, useLayoutEffect, useEffect, Children } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery.js';
import './styles.scss.js';

var Tabs = function (props) {
    var _a = props.headers, headers = _a === void 0 ? [] : _a, _b = props.className, className = _b === void 0 ? '' : _b, children = props.children;
    var _c = useState(0), currentTabIndex = _c[0], setCurrentTabIndex = _c[1];
    var _d = useState([]), tabItemWidths = _d[0], setTabItemWidths = _d[1];
    var _e = useState(0), activeLineWidth = _e[0], setActiveLineWidth = _e[1];
    var _f = useState(0), activeLineLeft = _f[0], setActiveLineLeft = _f[1];
    var isMobile = useMediaQuery('(max-width: 768px)');
    useLayoutEffect(function () {
        var _a;
        var itemWidths = [];
        for (var i = 0; i < headers.length; i++) {
            var id = "imiui-tab-".concat(i);
            var elWidth = ((_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.clientWidth) || 0;
            itemWidths.push(elWidth);
        }
        setTabItemWidths(itemWidths);
    }, []);
    useEffect(function () {
        setActiveLineWidth(tabItemWidths[currentTabIndex]);
        var left = 0;
        var gap = isMobile ? 16 : 24;
        for (var i = 0; i < currentTabIndex; i++) {
            left = left + gap + tabItemWidths[i];
        }
        setActiveLineLeft(left);
    }, [currentTabIndex, tabItemWidths]);
    return (React.createElement("div", { className: "imiui-tabs ".concat(className) },
        React.createElement("div", { className: 'imiui-tabs__header' },
            headers.map(function (header, index) {
                return (React.createElement("button", { key: index, id: "imiui-tab-".concat(index), className: "item".concat(currentTabIndex === index ? ' active' : ''), onClick: function () { return setCurrentTabIndex(index); } },
                    React.createElement("span", { className: 't-label-semibold-supertiny' }, header.title),
                    header.count && React.createElement("div", { className: 'count t-label-semibold-supertiny c-gray-300' }, header.count)));
            }),
            React.createElement("div", { style: { left: "".concat(activeLineLeft, "px"), width: activeLineWidth }, className: "active-line" })),
        children && Children.count(children) > 0 ? children[currentTabIndex] : React.createElement(React.Fragment, null)));
};

export { Tabs as default };
//# sourceMappingURL=index.js.map
