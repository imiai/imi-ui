import React from 'react';
import { IIconsProps } from './icons.types';

const LockNormalIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8V9H8V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8ZM21 12C21 10.3431 19.6569 9 18 9V8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8V9C4.34315 9 3 10.3431 3 12V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V12ZM13.5 14.5C13.5 15.048 13.2061 15.5274 12.7673 15.7892L13 18H11L11.2327 15.7892C10.7939 15.5274 10.5 15.048 10.5 14.5C10.5 13.6716 11.1716 13 12 13C12.8284 13 13.5 13.6716 13.5 14.5Z" />
        </svg>
    )
}

export default LockNormalIcon;