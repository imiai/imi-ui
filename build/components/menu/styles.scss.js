import styleInject from '../../node_modules/style-inject/dist/style-inject.es.js';

var css = ".imiui-button-menu .menu-list .imiui-menu-item, .imiui-button-menu .button {\n  outline: none;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n}\n\n.imiui-button-menu {\n  position: relative;\n  width: 24px;\n  height: 24px;\n}\n.imiui-button-menu .button {\n  background-color: var(--imiui-blue-50);\n  padding: 4px;\n  border-radius: 4px;\n  width: 24px;\n  height: 24px;\n}\n.imiui-button-menu .menu-list {\n  overflow: hidden;\n  background-color: var(--imiui-primary-white);\n  position: absolute;\n  right: 0;\n  top: calc(100% + 1px);\n  display: flex;\n  flex-direction: column;\n  z-index: 1;\n  border-radius: 8px;\n}\n.imiui-button-menu .menu-list .imiui-menu-item {\n  padding: 0px 16px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n.imiui-button-menu .menu-list .imiui-menu-item:not(:last-child) {\n  border-bottom: 1px solid var(--imiui-gray-25);\n}\n.imiui-button-menu .menu-list .imiui-menu-item:hover {\n  background-color: var(--imiui-blue-50);\n}";
styleInject(css);

export { css as default };
//# sourceMappingURL=styles.scss.js.map
