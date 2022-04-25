import 'styles/colors.scss';
import 'styles/common.scss';
import 'styles/mixin.scss';
import 'styles/typography.scss';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}