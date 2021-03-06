import React from 'react';
import { IIconsProps } from './icons.types';

const ArrowLeftSpecialIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.3476 5.2526C11.781 5.61952 11.82 6.25159 11.4348 6.66437L6.45485 12L11.4348 17.3356C11.82 17.7484 11.781 18.3805 11.3476 18.7474C10.9141 19.1143 10.2505 19.0771 9.86521 18.6644L4.26522 12.6644C3.91159 12.2855 3.91159 11.7145 4.26522 11.3356L9.86521 5.33565C10.2505 4.92286 10.9142 4.88568 11.3476 5.2526Z" />
        </svg>
    )
}

export default ArrowLeftSpecialIcon;