import styleInject from '../../opt/homebrew/Cellar/node/17.3.0/lib/node_modules/style-inject/dist/style-inject.es.js';

var css = ".imiui-card {\n  background-color: var(--imiui-primary-white);\n  border-radius: 8px;\n}\n.imiui-card.navi {\n  box-shadow: 3px 0px 7px rgba(20, 34, 69, 0.07);\n}\n.imiui-card.card {\n  box-shadow: 3px 3px 7px rgba(20, 34, 69, 0.02);\n}\n.imiui-card.dialogue {\n  box-shadow: 4px 4px 12px rgba(20, 34, 69, 0.1);\n}";
styleInject(css);

export { css as default };
//# sourceMappingURL=styles.scss.js.map
