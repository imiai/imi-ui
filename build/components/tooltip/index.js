import React from 'react';
import './styles.scss.js';

var Tooltip = function (props) {
    var title = props.title, _a = props.placement, placement = _a === void 0 ? 'top' : _a, children = props.children, _b = props.showTooltip, showTooltip = _b === void 0 ? true : _b;
    return (React.createElement("div", { className: "imiui-tooltip" },
        showTooltip && React.createElement("span", { className: "tooltip ".concat(placement, " t-label-semibold-supertiny") }, title),
        children));
};

export { Tooltip as default };
//# sourceMappingURL=index.js.map
