import React from 'react';
import { IIconsProps } from './icons.types';

const LocationIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 22C16.5 19.3684 21 16 21 10.4211C21 5.77023 16.9706 2 12 2C7.02944 2 3 5.77023 3 10.4211C3 16 7.5 19.3684 12 22ZM12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" />
        </svg>
    )
}

export default LocationIcon;