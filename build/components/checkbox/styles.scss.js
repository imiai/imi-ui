import styleInject from '../../node_modules/style-inject/dist/style-inject.es.js';

var css = ".imiui-checkbox {\n  display: inline-flex;\n  align-items: center;\n  height: 40px;\n  position: relative;\n  padding-left: 40px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  /* Hide the browser's default radio button */\n  /* Create a custom radio button */\n  /* Ripple effect */\n  /* disabled */\n}\n.imiui-checkbox input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n.imiui-checkbox .checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  padding: 8px;\n}\n.imiui-checkbox input:checked ~ .checkmark > .svg-checked {\n  display: block;\n}\n.imiui-checkbox input:checked ~ .checkmark > .svg-unchecked {\n  display: none;\n}\n.imiui-checkbox input:not(:checked) ~ .checkmark > .svg-checked {\n  display: none;\n}\n.imiui-checkbox input:not(:checked) ~ .checkmark > .svg-unchecked {\n  display: block;\n}\n.imiui-checkbox .ripple {\n  background-position: center;\n  transition: all 0.8s;\n}\n.imiui-checkbox input:not(:disabled):checked ~ .ripple:hover {\n  background: var(--imiui-blue-50) radial-gradient(circle, transparent 1%, var(--imiui-blue-50) 1%) center/15000%;\n}\n.imiui-checkbox input:not(:disabled):checked ~ .ripple:active {\n  background-color: var(--imiui-gray-100);\n  background-size: 100%;\n  transition: all 0s;\n}\n.imiui-checkbox input:not(:disabled):not(:checked) ~ .ripple:hover {\n  background: var(--imiui-gray-50) radial-gradient(circle, transparent 1%, var(--imiui-gray-50) 1%) center/15000%;\n}\n.imiui-checkbox input:not(:disabled):not(:checked) ~ .ripple:active {\n  background-color: var(--imiui-blue-200);\n  background-size: 100%;\n  transition: all 0s;\n}\n.imiui-checkbox input:disabled ~ .checkmark .svg-checked,\n.imiui-checkbox input:disabled ~ .checkmark .svg-unchecked {\n  fill: var(--imiui-gray-100);\n}\n.imiui-checkbox input:disabled ~ span {\n  color: var(--imiui-gray-100);\n}\n.imiui-checkbox span {\n  color: var(--imiui-primary-dark);\n}";
styleInject(css);

export { css as default };
//# sourceMappingURL=styles.scss.js.map
