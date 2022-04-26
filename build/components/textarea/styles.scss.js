import styleInject from '../../node_modules/style-inject/dist/style-inject.es.js';

var css = ".imiui-textarea {\n  position: relative;\n  padding: 12px 16px;\n  background: var(--imiui-primary-white);\n  outline: 1px solid var(--imiui-gray-50);\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n}\n.imiui-textarea.error {\n  outline-color: var(--imiui-status-error);\n}\n.imiui-textarea:focus-within {\n  outline-color: var(--imiui-primary-blue);\n}\n.imiui-textarea:focus-within.error {\n  outline-color: var(--imiui-status-error);\n}\n.imiui-textarea.disabled {\n  background: var(--imiui-gray-25);\n  outline: 1px solid var(--imiui-gray-50);\n}\n.imiui-textarea.disabled label {\n  color: var(--imiui-gray-300) !important;\n}\n.imiui-textarea.disabled textarea {\n  color: var(--imiui-gray-300) !important;\n}\n.imiui-textarea.disabled svg {\n  fill: var(--imiui-gray-200);\n}\n.imiui-textarea.label {\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 18px;\n}\n.imiui-textarea.label textarea:not(:placeholder-shown) {\n  margin-top: 16px;\n}\n.imiui-textarea.label textarea:not(:placeholder-shown) + label,\n.imiui-textarea.label textarea:focus + label {\n  color: var(--imiui-primary-blue);\n  top: 12px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n}\n.imiui-textarea.label textarea::placeholder {\n  opacity: 0;\n}\n.imiui-textarea.label textarea:focus {\n  margin-top: 16px;\n}\n.imiui-textarea.label textarea:focus::placeholder {\n  opacity: 1;\n}\n.imiui-textarea textarea:placeholder-shown + label,\n.imiui-textarea label {\n  color: var(--imiui-gray-200);\n  transition: all 0.2s;\n  position: absolute;\n  touch-action: manipulation;\n  cursor: text;\n}\n.imiui-textarea textarea {\n  resize: none;\n  transition: all 0.2s;\n  width: 100%;\n  caret-color: var(--imiui-primary-blue);\n  color: var(--imiui-primary-dark);\n  background-color: transparent;\n  border: none;\n  height: 36px;\n  z-index: 1;\n}\n.imiui-textarea textarea:focus {\n  outline: none;\n}\n.imiui-textarea textarea::placeholder {\n  color: var(--imiui-gray-200);\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 160%;\n}\n.imiui-textarea .length-counter {\n  color: var(--imiui-gray-200);\n  margin-left: auto;\n}\n\n.imiui-textarea-note {\n  margin-top: 8px;\n  width: 100%;\n  padding: 0 16px;\n  word-wrap: break-word;\n  max-height: 32px;\n  overflow: hidden;\n}\n.imiui-textarea-note.hint {\n  color: var(--imiui-gray-300);\n}\n.imiui-textarea-note.error {\n  color: var(--imiui-status-error);\n}";
styleInject(css);

export { css as default };
//# sourceMappingURL=styles.scss.js.map
