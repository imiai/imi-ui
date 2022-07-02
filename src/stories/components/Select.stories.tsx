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
    const [value, setValue] = useState<{label: string, value: string}>()

    const onChange = (event: any) => {
        console.log(event.target.value.value)
        setValue(event.target.value)
    }

    return (
        <div style={{height: '100vh'}}>
            <Select {...args} value={value?.label || ''} onChange={onChange}/>
        </div>
    )
}
export const Base = Template.bind({});
Base.args = {
    placeholder: 'Priority',
    withLabel: true,
    options: [
        {label:'asd', value: 1},
        {label:'dfg', value: 2}, 
        {label:'zxc', value: 3}, 
        {label:'fse', value: 4}, 
        {label:'wer', value: 5}, 
        {label:'fsd', value: 6}, 
        {label:'fse', value: 7}, 
        {label:'grh', value: 8}, 
        {label:'vsd', value: 9}, 
        {label:'jyt', value: 10}, 
        {label:'htd', value: 11}, 
        {label:'sdf', value: 12}, 
        {label:'uyt', value: 13}, 
        {label:'tjd', value: 14}
    ]
};
