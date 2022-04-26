import React from 'react';
import { IIconsProps } from './icons.types';

const TimeIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.5 6C13.5 5.44772 13.0523 5 12.5 5C11.9477 5 11.5 5.44772 11.5 6V11.5858L8.29289 14.7929C7.90237 15.1834 7.90237 15.8166 8.29289 16.2071C8.68342 16.5976 9.31658 16.5976 9.70711 16.2071L13.2071 12.7071C13.3946 12.5196 13.5 12.2652 13.5 12V6Z" />
        </svg>
    )
}

export default TimeIcon;