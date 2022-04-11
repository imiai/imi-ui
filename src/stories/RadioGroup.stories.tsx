import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio, RadioGroup } from 'components';

export default {
    title: 'Components/RadioGroup',
    component: RadioGroup,
    argTypes: {

    },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => {
    return (
        <RadioGroup {...args}>
            <Radio label='Male' name='Gender' value='Male'/>
            <Radio label='Female' name='Gender' value='Female'/>
        </RadioGroup>
    )
}
export const Default = Template.bind({});
Default.args = {
    value: 'Male',
    onChange: () => {},
};