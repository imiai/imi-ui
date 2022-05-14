import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Snackbar } from '../../components';
import { CheckIcon } from '../../icons';

export default {
    title: 'Components/Snackbar',
    component: Snackbar,
    argTypes: {
        type: {
            options: ['info', 'success', 'warning', 'error'],
            control: { type: 'select' },
            defaultValue: 'info'
        },
    },
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = (args) => {
    const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);

    return (
        <>
            <Button type='primary' size={54} onClick={() => setIsOpenSnackbar(true)}>Open Popup</Button>
            <Snackbar {...args} open={isOpenSnackbar} onClose={() => setIsOpenSnackbar(false)} />
        </>
    )
}
export const Base = Template.bind({});
Base.args = {
    content: 'Please login to your email to verify your email.',
    type: 'info',
    autoHideDuration: 6000,
};