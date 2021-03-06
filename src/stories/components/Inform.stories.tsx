import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Inform } from '../../components';
import { StatusSuccessIcon } from '../../icons';

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
        Icon: <StatusSuccessIcon />,
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
  icon: <StatusSuccessIcon />,
  content: 'Informative inform with dismiss button',
  closeable: true,
};