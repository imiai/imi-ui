import styleInject from '../../opt/homebrew/Cellar/node/17.3.0/lib/node_modules/style-inject/dist/style-inject.es.js';

var css = ".imiui-button {\n  outline: none;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n}\n\n.imiui-button {\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.imiui-button {\n  border-radius: 28px;\n  transition: all 200ms;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: fit-content;\n}\n.imiui-button.primary {\n  background: var(--imiui-primary-blue);\n  border: 1.5px solid var(--imiui-primary-blue);\n  color: var(--imiui-primary-white);\n}\n.imiui-button.primary svg {\n  fill: var(--imiui-primary-white);\n}\n@media (hover: hover) and (pointer: fine) {\n  .imiui-button.primary:hover {\n    background: var(--imiui-blue-600);\n    border: 1.5px solid var(--imiui-blue-300);\n  }\n}\n.imiui-button.primary:active {\n  background: var(--imiui-blue-700);\n  border: 1.5px solid var(--imiui-blue-700);\n}\n.imiui-button.primary.disabled {\n  background: var(--imiui-gray-25);\n  border: 1.5px solid var(--imiui-gray-25);\n  color: var(--imiui-gray-200);\n}\n.imiui-button.primary.disabled svg {\n  fill: var(--imiui-gray-200);\n}\n.imiui-button.secondary {\n  background: var(--imiui-primary-white);\n  border: 1.5px solid var(--imiui-primary-blue);\n  color: var(--imiui-primary-blue);\n}\n.imiui-button.secondary svg {\n  fill: var(--imiui-primary-blue);\n}\n@media (hover: hover) and (pointer: fine) {\n  .imiui-button.secondary:hover {\n    background: var(--imiui-primary-background);\n    border: 1.5px solid var(--imiui-blue-600);\n    color: var(--imiui-blue-600);\n  }\n  .imiui-button.secondary:hover svg {\n    fill: var(--imiui-blue-600);\n  }\n}\n.imiui-button.secondary:active {\n  background: var(--imiui-blue-50);\n  border: 1.5px solid var(--imiui-primary-blue);\n  color: var(--imiui-primary-blue);\n}\n.imiui-button.secondary:active svg {\n  fill: var(--imiui-primary-blue);\n}\n.imiui-button.secondary.disabled {\n  background: var(--imiui-primary-white);\n  border: 1.5px solid var(--imiui-gray-100);\n  color: var(--imiui-gray-200);\n}\n.imiui-button.secondary.disabled svg {\n  fill: var(--imiui-gray-200);\n}\n.imiui-button.tertiary {\n  background: var(--imiui-primary-white);\n  color: var(--imiui-primary-blue);\n}\n.imiui-button.tertiary svg {\n  fill: var(--imiui-primary-blue);\n}\n@media (hover: hover) and (pointer: fine) {\n  .imiui-button.tertiary:hover {\n    background: var(--imiui-primary-background);\n    color: var(--imiui-blue-600);\n  }\n  .imiui-button.tertiary:hover svg {\n    fill: var(--imiui-blue-600);\n  }\n}\n.imiui-button.tertiary:active {\n  background: var(--imiui-blue-50);\n  color: var(--imiui-primary-blue);\n}\n.imiui-button.tertiary:active svg {\n  fill: var(--imiui-primary-blue);\n}\n.imiui-button.tertiary.disabled {\n  background: var(--imiui-primary-white);\n  color: var(--imiui-gray-200);\n}\n.imiui-button.tertiary.disabled svg {\n  fill: var(--imiui-gray-200);\n}\n.imiui-button.size-54 {\n  height: 54px;\n  padding: 0 24px;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n}\n.imiui-button.size-54 svg {\n  width: 24px;\n  height: 24px;\n}\n.imiui-button.size-54 .start-icon {\n  margin-right: 10px;\n  width: 24px;\n  height: 24px;\n}\n.imiui-button.size-54 .end-icon {\n  margin-left: 10px;\n  width: 24px;\n  height: 24px;\n}\n.imiui-button.size-48 {\n  height: 48px;\n  padding: 0 20px;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n}\n.imiui-button.size-48 svg {\n  width: 24px;\n  height: 24px;\n}\n.imiui-button.size-48 .start-icon {\n  margin-right: 8px;\n  width: 24px;\n  height: 24px;\n}\n.imiui-button.size-48 .end-icon {\n  margin-left: 8px;\n  width: 24px;\n  height: 24px;\n}\n.imiui-button.size-40 {\n  height: 40px;\n  padding: 0 16px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 18px;\n}\n.imiui-button.size-40 svg {\n  width: 16px;\n  height: 16px;\n}\n.imiui-button.size-40 .start-icon {\n  margin-right: 4px;\n  width: 16px;\n  height: 16px;\n}\n.imiui-button.size-40 .end-icon {\n  margin-left: 4px;\n  width: 16px;\n  height: 16px;\n}\n.imiui-button.size-32 {\n  height: 32px;\n  padding: 0 12px;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 16px;\n}\n.imiui-button.size-32 svg {\n  width: 16px;\n  height: 16px;\n}\n.imiui-button.size-32 .start-icon {\n  margin-right: 4px;\n  width: 16px;\n  height: 16px;\n}\n.imiui-button.size-32 .end-icon {\n  margin-left: 4px;\n  width: 16px;\n  height: 16px;\n}\n\n.imiui-button-fix {\n  width: 100%;\n  padding: 16px;\n  background: var(--imiui-primary-white);\n  position: fixed;\n  bottom: 0;\n}\n.imiui-button-fix .imiui-button {\n  width: 100%;\n  height: 48px;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n}\n.imiui-button-fix .imiui-button svg {\n  width: 20px;\n  height: 20px;\n}\n.imiui-button-fix .imiui-button .start-icon {\n  margin-right: 8px;\n  width: 20px;\n  height: 20px;\n}\n.imiui-button-fix .imiui-button .end-icon {\n  margin-left: 8px;\n  width: 20px;\n  height: 20px;\n}";
styleInject(css);

export { css as default };
//# sourceMappingURL=styles.scss.js.map
