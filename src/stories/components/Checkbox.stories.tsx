import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from 'components';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    argTypes: {
        
    },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />
export const Base = Template.bind({});
Base.args = {
    checked: false,
    label: "Label",
    disabled: false,
};