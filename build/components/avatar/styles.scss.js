import styleInject from '../../node_modules/style-inject/dist/style-inject.es.js';

var css = ".imiui-avatar .img-20 {\n  width: 20px;\n  height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n}\n.imiui-avatar .img-30 {\n  width: 30px;\n  height: 30px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 20px;\n}\n.imiui-avatar .img-46 {\n  width: 46px;\n  height: 46px;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 32px;\n}\n.imiui-avatar img {\n  object-fit: cover;\n}\n.imiui-avatar .img {\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.imiui-avatar .img span {\n  color: var(--imiui-primary-white);\n}";
styleInject(css);

export { css as default };
//# sourceMappingURL=styles.scss.js.map
