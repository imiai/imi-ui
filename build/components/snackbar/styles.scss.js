import styleInject from '../../node_modules/style-inject/dist/style-inject.es.js';

var css = ".imiui-snackbar {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  width: 618px;\n  max-width: calc(100vw - 48px);\n  padding: 12px;\n  background-color: var(--imiui-blue-900);\n  box-shadow: 4px 4px 12px rgba(20, 34, 69, 0.1);\n  border-radius: 8px;\n  transition: all 300ms;\n  opacity: 0;\n}\n.imiui-snackbar svg {\n  min-width: 24px;\n  min-height: 24px;\n}\n.imiui-snackbar .message {\n  margin-left: 8px;\n  color: var(--imiui-primary-white);\n}\n.imiui-snackbar.top {\n  top: 24px;\n}\n.imiui-snackbar.bottom {\n  bottom: 24px;\n}\n.imiui-snackbar.show {\n  opacity: 1;\n}\n.imiui-snackbar.center {\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n}\n.imiui-snackbar.left {\n  left: 24px;\n}\n.imiui-snackbar.right {\n  right: 24px;\n}";
styleInject(css);

export { css as default };
//# sourceMappingURL=styles.scss.js.map
