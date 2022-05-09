import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '../../components';

export default {
    title: 'Components/Card',
    component: Card,
    argTypes: {
        type: {
            options: ['navi', 'card', 'dialogue'],
            control: { type: 'radio' },
        },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {

    return (
        <div style={{padding: 20}} className={'bg-primary-background'}>
            <Card {...args}>
                Content
            </Card>
        </div>
    )
}
export const Base = Template.bind({});
Base.args = {
    type: 'navi',
};