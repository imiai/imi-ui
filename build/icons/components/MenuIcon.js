import React from 'react';

var MenuIcon = function (props) {
    var _a = props.fill, fill = _a === void 0 ? '#7790A6' : _a, _b = props.className, className = _b === void 0 ? '' : _b, _c = props.width, width = _c === void 0 ? 24 : _c, _d = props.height, height = _d === void 0 ? 24 : _d;
    return (React.createElement("svg", { width: width, height: height, viewBox: "0 0 24 24", fill: fill, className: className, xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("rect", { x: "2", y: "3", width: "17", height: "2", rx: "1" }),
        React.createElement("rect", { x: "2", y: "11", width: "20", height: "2", rx: "1" }),
        React.createElement("rect", { x: "2", y: "19", width: "13", height: "2", rx: "1" })));
};

export { MenuIcon as default };
//# sourceMappingURL=MenuIcon.js.map
