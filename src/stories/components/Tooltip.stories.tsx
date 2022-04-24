import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Tooltip } from 'components';
import { CheckIcon } from 'icons';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    argTypes: {
        title: {
            control: { type: 'text' },
        },
        placement: {
            options: ['top', 'left', 'right'],
            control: { type: 'select' },
        }
    },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => {
    return (
        <div style={{padding: 50}}>
            <Tooltip {...args}>
                <span>{'Tooltip content'}</span>
            </Tooltip>
        </div>
    )
}
export const Base = Template.bind({});
Base.args = {
    title: 'tooltip',
    placement: 'top',
};