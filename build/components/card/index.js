import { __rest, __assign } from '../../opt/homebrew/Cellar/node/17.3.0/lib/node_modules/tslib/tslib.es6.js';
import React from 'react';
import './styles.scss.js';

var Card = function (props) {
    var _a = props.variant, variant = _a === void 0 ? 'card' : _a, children = props.children, rest = __rest(props, ["variant", "children"]);
    return (React.createElement("div", __assign({}, rest, { className: "imiui-card ".concat(variant, " ").concat(rest.className) }), children));
};

export { Card as default };
//# sourceMappingURL=index.js.map
