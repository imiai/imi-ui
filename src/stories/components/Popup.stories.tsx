import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Popup } from 'components';

export default {
    title: 'Components/Popup',
    component: Popup,
    argTypes: {
        imageSize: {
            options: ['large', 'small', 'none'],
            control: { type: 'select' },
        },
    },
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = (args) => {
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    return (
        <>
        <Button type='primary' size={54} onClick={() => setIsOpenPopup(true)}>Open Popup</Button>
        <Popup {...args} open={isOpenPopup} onClose={() => setIsOpenPopup(false)}/>
        </>
    )
}
export const Base = Template.bind({});
Base.args = {
    title: "Popup Title",
    subTitle: "Popup sub-title",
    image: '',
    imageSize: 'large',
    mainButton: "Main button",
    subButton: 'Sub button',
    clickOutsideToClose: true,
};