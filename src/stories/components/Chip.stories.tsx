import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from '../../components';
import { InfoIcon } from '../../icons';

export default {
    title: 'Components/Chip',
    component: Chip,
    argTypes: {
        size: {
            options: [32, 40],
            control: { type: 'radio' },
        },
    },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => {

    return (
        <Chip {...args}/>
    )
}
export const Base = Template.bind({});
Base.args = {
    size: 32,
    content: '',
    iconLeft: <InfoIcon />,
    isSelected: false
};