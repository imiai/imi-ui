import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from '../../components';

export default {
    title: 'Components/TextArea',
    component: TextArea,
    argTypes: {
        error: {
            description: 'Error has higher priority than Hint. Up to 2 lines ',
            control: { type: 'text' },
        },
        hint: {
            description: 'Up to 2 lines',
            control: { type: 'text' },
        },
        placeholder: {},
    },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />
export const Base = Template.bind({});
Base.args = {
    placeholder: 'Placeholder',
    isError: false,
    disabled: false,
    hint: '',
    error: '',
};

export const Label = Template.bind({});
Label.args = {
    placeholder: 'Placeholder',
    isError: false,
    disabled: false,
    hint: '',
    error: '',
    label: 'Label Name'
};


export const Length = Template.bind({});
Length.storyName = 'Length counter'
Length.args = {
    placeholder: 'Placeholder',
    isError: false,
    disabled: false,
    hint: '',
    error: '',
    label: 'Label Name',
    showLengthCounter: true,
};