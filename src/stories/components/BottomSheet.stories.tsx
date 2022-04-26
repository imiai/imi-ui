import React, { useState } from 'react';
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

    return (
        <>
        <Button type='primary' size={54} onClick={() => setIsOpenSheet(true)}>Open Bottom Sheet</Button>
        <BottomSheet {...args} open={isOpenSheet} onClose={() => setIsOpenSheet(false)}>
            Content
        </BottomSheet>
        </>
    )
}
export const Base = Template.bind({});
Base.args = {
    title: "Title",
    clickOutsideToClose: true,
};