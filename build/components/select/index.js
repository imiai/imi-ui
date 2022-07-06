import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React from 'react';
import SelectType1 from '../select-type-1/index.js';
import SelectType2 from '../select-type-2/index.js';

var Select = function (props) {
    var _a = props.variant, variant = _a === void 0 ? 'box' : _a, rest = __rest(props, ["variant"]);
    if (variant === 'box') {
        return (React.createElement(SelectType1, __assign({}, rest)));
    }
    return (React.createElement(SelectType2, __assign({}, rest)));
};

export { Select as default };
//# sourceMappingURL=index.js.map
