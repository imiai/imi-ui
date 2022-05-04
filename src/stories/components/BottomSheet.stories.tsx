import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BottomSheet, Button } from '../../components';
import { EyeCloseIcon } from '../../icons';

export default {
    title: 'Components/BottomSheet',
    component: BottomSheet,
    argTypes: {
        headrLeftIcon: {
            options: ['None', 'Icon'],
            mapping: {
              None: undefined,
              Icon: <EyeCloseIcon/>,
            },
            control: { type: 'select' },
        },
    },
} as ComponentMeta<typeof BottomSheet>;

const Template: ComponentStory<typeof BottomSheet> = (args) => {
    const [isOpenSheet, setIsOpenSheet] = useState(false);
    const [data, setData] = useState([]);
    const add = () => {
        let _data = [...data, 'content', 'content', 'content', 'content', 'content']
        setData(_data)
    }

    const remove = () => {
        let _data = ['content', 'content', 'content', 'content', 'content']
        setData(_data)
    }

    return (
        <>
        <Button type='primary' size={54} onClick={() => setIsOpenSheet(true)}>Open Bottom Sheet</Button>
        <BottomSheet {...args} open={isOpenSheet} onClose={() => setIsOpenSheet(false)}>
            {data.map((item, index) => {
                return (
                    <div key={index}>
                        {item}
                    </div>
                )
            })}
            <button onClick={add}>Add</button>
            <button onClick={remove}>Remove</button>
        </BottomSheet>
        </>
    )
}
export const Base = Template.bind({});
Base.args = {
    title: "Title",
    clickOutsideToClose: true,
};