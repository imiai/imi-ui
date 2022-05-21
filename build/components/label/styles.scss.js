import styleInject from '../../node_modules/style-inject/dist/style-inject.es.js';

var css = ".imiui-label {\n  display: inline-flex;\n}\n.imiui-label.priority {\n  padding: 4px 16px;\n  border-radius: 16px;\n}\n.imiui-label.priority.high {\n  background-color: var(--imiui-secondary-red);\n}\n.imiui-label.priority.medium {\n  background-color: var(--imiui-primary-blue);\n}\n.imiui-label.priority.low {\n  background-color: var(--imiui-gray-100);\n}\n.imiui-label.progress {\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n.imiui-label.progress.completed {\n  background-color: var(--imiui-secondary-green);\n}\n.imiui-label.progress.in-progress {\n  background-color: var(--imiui-primary-blue);\n}\n.imiui-label.progress.more-info {\n  background-color: var(--imiui-primary-orange);\n}\n.imiui-label.progress.draft {\n  background-color: var(--imiui-gray-100);\n}";
styleInject(css);

export { css as default };
//# sourceMappingURL=styles.scss.js.map
