import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from '../../components/image';

export default {
    title: 'Components/Image',
    component: Image,
    argTypes: {
        
    },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => {
    return (
        <>
        {<p>{'<img /> with image placeholder'}</p>}
        <Image {...args} />
        </>
    )
}
export const Base = Template.bind({});
Base.args = {
};