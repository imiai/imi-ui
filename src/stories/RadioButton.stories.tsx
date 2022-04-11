import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio, RadioGroup } from 'components';

export default {
    title: 'Components/RadioButton',
    component: Radio,
    argTypes: {

    },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
    return (
        <Radio {...args} />
    )
}
export const Default = Template.bind({});
Default.args = {
    label: 'Male',
    value: 'Male',
    name: 'Gender'
};