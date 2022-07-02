import styleInject from '../../node_modules/style-inject/dist/style-inject.es.js';

var css = ".imiui-select .options button {\n  outline: none;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n}\n\n.imiui-select {\n  position: relative;\n  cursor: pointer;\n}\n.imiui-select .imiui-input.disabled {\n  background: var(--imiui-primary-white) !important;\n}\n.imiui-select .imiui-input.disabled input:not(:placeholder-shown) + label {\n  color: var(--imiui-primary-blue) !important;\n}\n.imiui-select .imiui-input label {\n  color: var(--imiui-gray-200) !important;\n}\n.imiui-select .imiui-input input {\n  color: var(--imiui-primary-dark);\n  cursor: pointer !important;\n}\n.imiui-select .imiui-input svg {\n  fill: var(--imiui-gray-200);\n}\n.imiui-select .arrow-icon {\n  transform: rotate(0deg);\n  transition: all 200ms;\n}\n.imiui-select .arrow-icon.rotate {\n  transform: rotate(180deg);\n}\n.imiui-select .options {\n  background-color: var(--imiui-primary-white);\n  position: absolute;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  z-index: 1200;\n  max-height: 330px;\n  overflow: scroll;\n  border-radius: 8px;\n}\n.imiui-select .options button {\n  min-height: 36px;\n  padding: 0 12px;\n  text-align: left;\n}\n.imiui-select .options button:hover {\n  background-color: var(--imiui-blue-50);\n}\n.imiui-select .options button.active {\n  background-color: var(--imiui-primary-blue);\n  color: var(--imiui-primary-white);\n}\n.imiui-select .options button p {\n  padding: 0;\n  margin: 0;\n  height: 36px;\n  line-height: 36px;\n}";
styleInject(css);

export { css as default };
//# sourceMappingURL=styles.scss.js.map
