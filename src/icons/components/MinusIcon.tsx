import React from 'react';
import { IIconsProps } from './icons.types';

const MinusIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12C2 11.1716 2.67157 10.5 3.5 10.5H20.5C21.3284 10.5 22 11.1716 22 12V12C22 12.8284 21.3284 13.5 20.5 13.5H3.5C2.67157 13.5 2 12.8284 2 12V12Z" />
        </svg>
    )
}

export default MinusIcon;