import React from 'react';
import { IIconsProps } from './icons.types';

const MinusLineIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12V12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12V12Z"/>
        </svg>
    )
}

export default MinusLineIcon;