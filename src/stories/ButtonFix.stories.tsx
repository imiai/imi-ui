import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EyeClose, EyeOpen } from 'icons';
import { ButtonFix } from 'components';


export default {
  title: 'Components/ButtonFix',
  component: ButtonFix,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary'],
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
} as ComponentMeta<typeof ButtonFix>;

const Template: ComponentStory<typeof ButtonFix> = (args) => {
  const {label, ...rest} = args;
  return (
    <ButtonFix {...rest} >{label}</ButtonFix>
  )
}

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  disabled: false,
  label: 'Button',
  href: ''
};

console.log('asdfghjkl');