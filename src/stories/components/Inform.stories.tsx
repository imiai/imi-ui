import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Inform } from 'components';
import { StatusSuccess } from 'icons';

export default {
  title: 'Components/Inform',
  component: Inform,
  argTypes: {
    severity: {
      options: ['success', 'info', 'warning', 'error'],
      control: { type: 'select' },
      defaultValue: 'info'
    },
    icon: {
      options: ['None', 'Icon'],
      mapping: {
        None: undefined,
        Icon: <StatusSuccess />,
      },
      control: { type: 'select' },
      defaultValue: 'Icon'
    },
  },
} as ComponentMeta<typeof Inform>;

const Template: ComponentStory<typeof Inform> = (args) => <Inform {...args} />
export const Base = Template.bind({});
Base.args = {
  severity: 'info',
  icon: <StatusSuccess />,
  content: 'Informative inform with dismiss button',
  closeable: true,
};