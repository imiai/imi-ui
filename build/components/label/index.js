import React from 'react';
import './styles.scss.js';

var Label = function (props) {
    var type = props.type, content = props.content, priority = props.priority, progress = props.progress, className = props.className;
    return (React.createElement("div", { className: "imiui-label ".concat(type).concat(priority ? " ".concat(priority) : '').concat(progress ? " ".concat(progress) : '').concat(className ? " ".concat(className) : '') },
        React.createElement("span", { className: "t-label-semibold-supertiny c-primary-white" }, content)));
};

export { Label as default };
//# sourceMappingURL=index.js.map
