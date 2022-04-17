import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from 'components';
import { EyeClose, EyeOpen } from 'icons';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
    size: {
      options: [54, 48, 40, 32],
      control: { type: 'radio' },
    },
    startIcon: {
      options: ['None', 'Icon'],
      mapping: {
        None: undefined,
        Icon: <EyeClose/>,
      },
      control: { type: 'select' },
    },
    endIcon: {
      options: ['None', 'Icon'],
      mapping: {
        None: undefined,
        Icon: <EyeClose/>,
      },
      control: { type: 'select' },
    }
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  const {label, ...rest} = args;
  return (
    <Button {...rest} >{label}</Button>
  )
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'primary',
  size: 54,
  disabled: false,
  label: 'Button',
  href: '',
};
