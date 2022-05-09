import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '../../components';

export default {
    title: 'Components/Avatar',
    component: Avatar,
    argTypes: {
        size: {
            options: [24, 36, 48, 60, 72, 96],
            control: { type: 'radio' },
        },
        src: {
            control: { type: 'text' }
        },
        name: {
            control: { type: 'text' }
        }
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => {

    return (
        <>
            <Avatar {...args} />
        </>
    )
}
export const Base = Template.bind({});
Base.args = {
    size: 24,
};