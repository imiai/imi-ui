import './../src/styles/colors.scss';
import './../src/styles/common.scss';
import './../src/styles/mixin.scss';
import './../src/styles/typography.scss';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}