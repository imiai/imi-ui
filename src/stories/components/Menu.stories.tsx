import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu } from '../../components';
import { MenuItem } from '../../components/menu';
import { EditIcon } from '../../icons';

export default {
    title: 'Components/Menu',
    component: Menu,
    argTypes: {
    },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => {

    const onItemClick = (e: any) => {
        console.log('On Menu Item Click')
    }

    return (
        <Menu {...args}>
            <MenuItem onClick={onItemClick}>
                <EditIcon width={20} height={20} fill={'var(--imiui-gray-200)'}/>
                <span className='t-label-regular-tiny ml-4 c-primary-dark'>Edit</span>
            </MenuItem>
            <MenuItem onClick={onItemClick}>
                <EditIcon width={20} height={20} fill={'var(--imiui-gray-200)'}/>
                <span className='t-label-regular-tiny ml-4 c-primary-dark'>Edit</span>
            </MenuItem>
        </Menu>
    )
}
export const Base = Template.bind({});
Base.args = {
};
