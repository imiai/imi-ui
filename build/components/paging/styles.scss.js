import styleInject from '../../node_modules/style-inject/dist/style-inject.es.js';

var css = ".imiui-paging {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 4px;\n}\n.imiui-paging__title {\n  text-align: center;\n  color: var(--imiui-primary-dark);\n}\n.imiui-paging__list {\n  display: flex;\n  gap: 4px;\n}\n.imiui-paging__button {\n  height: 32px;\n  width: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--imiui-primary-dark);\n  border-radius: 5px;\n}\n.imiui-paging__button.arrow {\n  background-color: transparent !important;\n}\n.imiui-paging__button:hover {\n  background-color: transparent;\n}\n.imiui-paging__button:disabled {\n  background-color: var(--imiui-blue-50);\n  cursor: auto;\n}\n.imiui-paging__buttonSelecting {\n  background-color: var(--imiui-blue-50) !important;\n  color: var(--imiui-primary-dark);\n}\n.imiui-paging__buttonSelecting:hover {\n  background-color: #ef7b51;\n}";
styleInject(css);

export { css as default };
//# sourceMappingURL=styles.scss.js.map
