import styleInject from '../../node_modules/style-inject/dist/style-inject.es.js';

var css = ".imiui-input .autocomplete-options button, .imiui-input .icon {\n  outline: none;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n}\n\n.imiui-input {\n  position: relative;\n  height: 48px;\n  padding: 0 16px;\n  background: var(--imiui-primary-white);\n  outline: 1px solid var(--imiui-gray-50);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n}\n.imiui-input.error {\n  outline-color: var(--imiui-status-error);\n}\n.imiui-input:focus-within {\n  outline-color: var(--imiui-primary-blue);\n}\n.imiui-input:focus-within.error {\n  outline-color: var(--imiui-status-error);\n}\n.imiui-input.disabled {\n  background: var(--imiui-gray-25);\n  outline: 1px solid var(--imiui-gray-50);\n}\n.imiui-input.disabled.label input:not(:placeholder-shown) + label,\n.imiui-input.disabled.label input:focus + label {\n  color: var(--imiui-gray-300);\n}\n.imiui-input.disabled input {\n  color: var(--imiui-gray-300);\n}\n.imiui-input.disabled svg {\n  fill: var(--imiui-gray-200);\n}\n.imiui-input.label {\n  height: 54px;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 18px;\n}\n.imiui-input.label input:not(:placeholder-shown) {\n  position: absolute;\n  top: 26px;\n}\n.imiui-input.label input:not(:placeholder-shown) + label,\n.imiui-input.label input:focus + label {\n  color: var(--imiui-primary-blue);\n  top: 8px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n}\n.imiui-input.label input:focus {\n  position: absolute;\n  top: 26px;\n}\n.imiui-input.label input::-webkit-input-placeholder {\n  opacity: 0;\n}\n.imiui-input.label input::-moz-placeholder {\n  opacity: 0;\n}\n.imiui-input.label input:-ms-input-placeholder {\n  opacity: 0;\n}\n.imiui-input.label input:-moz-placeholder {\n  opacity: 0;\n}\n.imiui-input input:placeholder-shown + label,\n.imiui-input label {\n  color: var(--imiui-gray-200);\n  transition: all 0.2s;\n  position: absolute;\n  touch-action: manipulation;\n  cursor: text;\n}\n.imiui-input input {\n  transition: all 0.2s;\n  width: 100%;\n  caret-color: var(--imiui-primary-blue);\n  color: var(--imiui-primary-dark);\n  background-color: transparent;\n  border: none;\n  z-index: 1;\n}\n.imiui-input input:focus {\n  outline: none;\n}\n.imiui-input input::-webkit-input-placeholder {\n  color: var(--imiui-gray-200);\n}\n.imiui-input input::-moz-placeholder {\n  color: var(--imiui-gray-200);\n}\n.imiui-input input:-ms-input-placeholder {\n  color: var(--imiui-gray-200);\n}\n.imiui-input input:-moz-placeholder {\n  color: var(--imiui-gray-200);\n}\n.imiui-input hr {\n  margin: 0 10px;\n  height: 24px;\n  border: 1px solid var(--imiui-gray-50);\n}\n.imiui-input .icon-container {\n  margin-left: auto;\n  display: flex;\n  z-index: 1;\n}\n.imiui-input .icon {\n  width: 20px;\n  height: 20px;\n}\n.imiui-input .icon.close {\n  margin-left: 16px;\n}\n.imiui-input .icon svg {\n  width: 20px;\n  height: 20px;\n}\n.imiui-input .autocomplete-options {\n  background-color: var(--imiui-primary-white);\n  position: absolute;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  z-index: 1200;\n  border-radius: 8px;\n  max-height: 330px;\n  overflow: scroll;\n}\n.imiui-input .autocomplete-options button {\n  padding: 6px 12px;\n  text-align: left;\n}\n.imiui-input .autocomplete-options button:hover {\n  background-color: var(--imiui-blue-50);\n}\n\n.imiui-input-note {\n  margin-top: 8px;\n  width: 100%;\n  padding: 0 16px;\n  word-wrap: break-word;\n  max-height: 32px;\n  overflow: hidden;\n}\n.imiui-input-note.hint {\n  color: var(--imiui-gray-300);\n}\n.imiui-input-note.error {\n  color: var(--imiui-status-error);\n}";
styleInject(css);

export { css as default };
//# sourceMappingURL=styles.scss.js.map
