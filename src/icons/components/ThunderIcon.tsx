import React from 'react';
import { IIconsProps } from './icons.types';

const ThunderIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2L13.1829 9.48889H18L6 22L9.62345 13.2444H7.37288C6.69453 13.2444 6.21302 12.5834 6.42108 11.9377L9.40004 2.69329C9.53319 2.28009 9.91772 2 10.3518 2H18Z" />
        </svg>
    )
}

export default ThunderIcon;