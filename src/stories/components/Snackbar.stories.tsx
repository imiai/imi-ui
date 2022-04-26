import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Snackbar } from '../../components';
import { CheckIcon } from '../../icons';

export default {
    title: 'Components/Snackbar',
    component: Snackbar,
    argTypes: {
        icon: {
            options: ['None', 'Icon'],
            mapping: {
                None: undefined,
                Icon: <CheckIcon />,
            },
            control: { type: 'select' },
            defaultValue: 'Icon'
        },
        anchorOrigin: {
            description: '{<br/>vertical: bottom | top; <br/>horizontal: left | center | right<br/>}',
            vertical: {
                options: ['bottom', 'top'],
                control: { type: 'select' },
            },
            horizontal: {
                options: ['left', 'center', 'right'],
                control: { type: 'select' },
            }
        },
    },
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = (args) => {
    const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);

    return (
        <>
            <Button type='primary' size={54} onClick={() => setIsOpenSnackbar(true)}>Open Popup</Button>
            <Snackbar {...args} open={isOpenSnackbar} anchorOrigin={{ vertical: args.anchorOrigin?.vertical || 'top', horizontal: args.anchorOrigin?.horizontal || 'center' }} onClose={() => setIsOpenSnackbar(false)} titleClassName={'c-status-success'} />
        </>
    )
}
export const Base = Template.bind({});
Base.args = {
    title: 'Account successfully created',
    content: 'Please login to your email to verify your email.',
    anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
    },
    titleClassName: '',
    autoHideDuration: 6000,
};