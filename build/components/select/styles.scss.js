import styleInject from '../../node_modules/style-inject/dist/style-inject.es.js';

var css = ".imiui-select .options button {\n  outline: none;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n}\n\n.imiui-select {\n  position: relative;\n  cursor: pointer;\n}\n.imiui-select .imiui-input.disabled {\n  background: var(--imiui-primary-white) !important;\n}\n.imiui-select .imiui-input.disabled input:not(:placeholder-shown) + label {\n  color: var(--imiui-primary-blue) !important;\n}\n.imiui-select .imiui-input label {\n  color: var(--imiui-gray-200) !important;\n}\n.imiui-select .imiui-input input {\n  color: var(--imiui-primary-dark);\n  cursor: pointer !important;\n}\n.imiui-select .imiui-input svg {\n  fill: var(--imiui-gray-200);\n}\n.imiui-select .options {\n  background-color: var(--imiui-primary-white);\n  position: absolute;\n  left: 0;\n  top: calc(100% + 1px);\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border-radius: 8px;\n}\n.imiui-select .options button {\n  padding: 0 12px;\n  height: 36px;\n  text-align: left;\n}\n.imiui-select .options button:hover {\n  background-color: var(--imiui-blue-50);\n}";
styleInject(css);

export { css as default };
//# sourceMappingURL=styles.scss.js.map
