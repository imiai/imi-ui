import React from 'react';
import { IIconsProps } from './icons.types';

const MenuIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="3" width="17" height="2" rx="1"/>
            <rect x="2" y="11" width="20" height="2" rx="1"/>
            <rect x="2" y="19" width="13" height="2" rx="1"/>
        </svg>
    )
}

export default MenuIcon;