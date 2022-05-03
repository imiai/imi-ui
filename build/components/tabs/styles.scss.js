import styleInject from '../../node_modules/style-inject/dist/style-inject.es.js';

var css = ".imiui-tabs__header {\n  position: relative;\n  border-bottom: solid 1px var(--imiui-gray-50);\n  display: flex;\n  gap: 16px;\n}\n.imiui-tabs__header .item {\n  display: flex;\n  color: var(--imiui-primary-dark);\n  padding-bottom: 18px;\n}\n.imiui-tabs__header .item.active span {\n  color: var(--imiui-primary-blue);\n}\n.imiui-tabs__header .item .count {\n  margin-left: 8px;\n  background: var(--imiui-gray-50);\n  border-radius: 10px;\n  height: 18px;\n  padding: 1px 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.imiui-tabs__header .active-line {\n  height: 2px;\n  background: var(--imiui-primary-blue);\n  position: absolute;\n  bottom: -1px;\n  transition: left linear 200ms, width linear 200ms;\n}\n\n@media only screen and (min-width: 768px) {\n  .imiui-tabs__header {\n    gap: 24px;\n  }\n}";
styleInject(css);

export { css as default };
//# sourceMappingURL=styles.scss.js.map
