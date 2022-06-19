import styleInject from '../../node_modules/style-inject/dist/style-inject.es.js';

var css = ".imiui-chip {\n  padding: 0 12px;\n  display: flex;\n  align-items: center;\n}\n.imiui-chip.size_32 {\n  height: 32px;\n}\n.imiui-chip.size_40 {\n  height: 40px;\n}\n.imiui-chip.selected {\n  border: 1px solid var(--imiui-primary-blue);\n  border-radius: 100px;\n  background-color: var(--imiui-primary-white);\n}\n.imiui-chip.selected p {\n  color: var(--imiui-primary-blue);\n}\n.imiui-chip.unselected {\n  border: 1px solid var(--imiui-blue-50);\n  border-radius: 100px;\n  background-color: var(--imiui-blue-50);\n}\n.imiui-chip.unselected p {\n  color: var(--imiui-primary-dark);\n}\n.imiui-chip .left-icon {\n  margin-right: 8px;\n  width: 16px;\n  height: 16px;\n}\n.imiui-chip .left-icon svg {\n  width: 16px;\n  height: 16px;\n}\n.imiui-chip .close-icon {\n  margin-left: auto;\n  padding: 0;\n  cursor: pointer;\n  background: none;\n  border: none;\n  width: 16px;\n  height: 16px;\n}\n.imiui-chip p {\n  margin: 0;\n}";
styleInject(css);

export { css as default };
//# sourceMappingURL=styles.scss.js.map
