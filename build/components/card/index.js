import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React, { forwardRef } from 'react';
import './styles.scss.js';

var Card = forwardRef(function (props, ref) {
    var _a = props.variant, variant = _a === void 0 ? 'card' : _a, children = props.children, rest = __rest(props, ["variant", "children"]);
    return (React.createElement("div", __assign({}, rest, { ref: ref, className: "imiui-card ".concat(variant, " ").concat(rest.className) }), children));
});

export { Card as default };
//# sourceMappingURL=index.js.map
