import React from 'react';
import { IIconsProps } from './icons.types';

const CloseT2Icon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM14.8284 7.75736C15.219 7.36684 15.8521 7.36684 16.2426 7.75736C16.6332 8.14788 16.6332 8.78105 16.2426 9.17157L13.4142 12L16.2426 14.8284C16.6332 15.219 16.6332 15.8521 16.2426 16.2426C15.8521 16.6332 15.219 16.6332 14.8284 16.2426L12 13.4142L9.17157 16.2426C8.78105 16.6332 8.14788 16.6332 7.75736 16.2426C7.36683 15.8521 7.36683 15.219 7.75736 14.8284L10.5858 12L7.75736 9.17157C7.36683 8.78105 7.36683 8.14788 7.75736 7.75736C8.14788 7.36684 8.78105 7.36684 9.17157 7.75736L12 10.5858L14.8284 7.75736Z"/>
        </svg>
    )
}

export default CloseT2Icon;