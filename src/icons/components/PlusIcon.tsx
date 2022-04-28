import React from 'react';
import { IIconsProps } from './icons.types';

const PlusIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C11.1716 2 10.5 2.67157 10.5 3.5V10.5H3.5C2.67157 10.5 2 11.1716 2 12C2 12.8284 2.67157 13.5 3.5 13.5H10.5V20.5C10.5 21.3284 11.1716 22 12 22C12.8284 22 13.5 21.3284 13.5 20.5V13.5H20.5C21.3284 13.5 22 12.8284 22 12C22 11.1716 21.3284 10.5 20.5 10.5H13.5V3.5C13.5 2.67157 12.8284 2 12 2Z"/>
        </svg>
    )
}

export default PlusIcon;