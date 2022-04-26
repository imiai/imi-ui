import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../../components';
import { EyeCloseIcon } from '../../icons';

export default {
    title: 'Components/Input',
    component: Input,
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
        withLabel: {
            description: 'Set placeholder as Label',
            defaultValue: false
        },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />
export const Base = Template.bind({});
Base.args = {
    placeholder: 'Placeholder',
    isError: false,
    disabled: false,
    hint: '',
    error: '',
    withLabel: false,
};

export const IconAndClear = Template.bind({});
IconAndClear.storyName = 'Icon & Clear'
IconAndClear.argTypes = {
    endIcon: {
        options: ['None', 'Icon'],
        mapping: {
            None: undefined,
            Icon: <EyeCloseIcon />,
        },
        control: { type: 'select' },
        defaultValue: 'None'
    },
}
IconAndClear.args = {
    ...Base.args,
    endIcon: undefined,
    onEndIconClick: () => {},
    onClear: () => {},
}