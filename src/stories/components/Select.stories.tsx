import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '../../components';

export default {
    title: 'Components/Select',
    component: Select,
    argTypes: {
        placeholder: {},
        withLabel: {
            description: 'Set placeholder as Label',
            defaultValue: false
        },
        options: {
            description: 'Array options with format {label: string, value: any}',
        },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState('')

    const onChange = (event: any) => {
        console.log(event.target.value)
        setValue(event.target.value)
    }

    return (
        <Select {...args} value={value} onChange={onChange}/>
    )
}
export const Base = Template.bind({});
Base.args = {
    placeholder: 'Priority',
    withLabel: true,
    options: [{label:'asd', value: 'asd'}, {label:'dfg', value: 'dfg'}]
};
