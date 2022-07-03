import styleInject from '../../node_modules/style-inject/dist/style-inject.es.js';

var css = ".imiui-tooltip {\n  position: relative;\n  display: inline-block;\n}\n.imiui-tooltip .tooltip {\n  position: absolute;\n  display: none;\n  opacity: 0;\n  transition: all 200ms;\n  background: var(--imiui-primary-dark);\n  border-radius: 8px;\n  padding: 12px 16px 14px;\n  color: var(--imiui-primary-white);\n}\n.imiui-tooltip .tooltip.top {\n  top: -48px;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n.imiui-tooltip .tooltip.top::after {\n  top: calc(100% - 6px);\n  left: 50%;\n  transform: translate(-50%, 0%);\n  border-right: 12px solid transparent;\n  border-left: 12px solid transparent;\n  border-top: 12px solid var(--imiui-primary-dark);\n}\n.imiui-tooltip .tooltip.left {\n  right: calc(100% + 6px);\n  top: 50%;\n  transform: translate(0, -50%);\n}\n.imiui-tooltip .tooltip.left::after {\n  top: 50%;\n  right: -6px;\n  transform: translate(0, -50%);\n  border-top: 12px solid transparent;\n  border-bottom: 12px solid transparent;\n  border-left: 12px solid var(--imiui-primary-dark);\n}\n.imiui-tooltip .tooltip.right {\n  left: calc(100% + 6px);\n  top: 50%;\n  transform: translate(0, -50%);\n}\n.imiui-tooltip .tooltip.right::after {\n  top: 50%;\n  left: -6px;\n  transform: translate(0, -50%);\n  border-top: 12px solid transparent;\n  border-bottom: 12px solid transparent;\n  border-right: 12px solid var(--imiui-primary-dark);\n}\n.imiui-tooltip .tooltip::after {\n  content: \" \";\n  position: absolute;\n}\n.imiui-tooltip:hover .tooltip {\n  opacity: 1;\n  display: block;\n}";
styleInject(css);

export { css as default };
//# sourceMappingURL=styles.scss.js.map
