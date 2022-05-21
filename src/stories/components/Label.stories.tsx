import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label } from '../../components';

export default {
    title: 'Components/Label',
    component: Label,
    argTypes: {
        type: {
            options: ['priority', 'progress'],
            control: { type: 'select' },
            defaultValue: 'priority'
        },
        priority: {
            options: ['high', 'medium', 'low'],
            control: { type: 'select' },
            defaultValue: 'high'
        },
        progress: {
            options: ['completed', 'in-progress', 'more-info', 'draft'],
            control: { type: 'select' },
            defaultValue: 'completed'
        }
    },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => {

    return (
        <Label type='priority' priority='high' content='High'/>
    )
}
export const Base = Template.bind({});
Base.args = {
};
