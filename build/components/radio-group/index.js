import { __rest, __assign } from '../../opt/homebrew/Cellar/node/17.3.0/lib/node_modules/tslib/tslib.es6.js';
import React from 'react';

var RadioGroup = function (props) {
    var children = props.children, value = props.value, rest = __rest(props, ["children", "value"]);
    var childrenWithProps = React.Children.map(children, function (child) {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                defaultChecked: child.props.value === value
            });
        }
        return child;
    });
    return (React.createElement("div", __assign({}, rest), childrenWithProps));
};

export { RadioGroup as default };
//# sourceMappingURL=index.js.map
