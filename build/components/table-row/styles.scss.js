import styleInject from '../../opt/homebrew/Cellar/node/17.3.0/lib/node_modules/style-inject/dist/style-inject.es.js';

var css = ".imiui-table-row {\n  background: var(--imiui-primary-white);\n}\n.imiui-table-row:hover {\n  background: var(--imiui-primary-background);\n}";
styleInject(css);

export { css as default };
//# sourceMappingURL=styles.scss.js.map
