import React from 'react';
import { IIconsProps } from './icons.types';

const ArrowUpSpecialIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd" d="M9.2526 15.6476C9.61952 16.081 10.2516 16.12 10.6644 15.7348L16 10.7548L21.3356 15.7348C21.7484 16.12 22.3805 16.081 22.7474 15.6476C23.1143 15.2142 23.0771 14.5505 22.6644 14.1652L16.6644 8.56522C16.2855 8.21159 15.7145 8.21159 15.3356 8.56522L9.33565 14.1652C8.92286 14.5505 8.88568 15.2142 9.2526 15.6476Z" />
        </svg>
    )
}

export default ArrowUpSpecialIcon;