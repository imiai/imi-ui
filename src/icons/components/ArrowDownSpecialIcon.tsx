import React from 'react';
import { IIconsProps } from './icons.types';

const ArrowDownSpecialIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
           <path fillRule="evenodd" clipRule="evenodd" d="M9.2526 8.35243C9.61952 7.91901 10.2516 7.87997 10.6644 8.26523L16 13.2452L21.3356 8.26523C21.7484 7.87997 22.3805 7.91901 22.7474 8.35243C23.1143 8.78585 23.0771 9.44952 22.6644 9.83479L16.6644 15.4348C16.2855 15.7884 15.7145 15.7884 15.3356 15.4348L9.33565 9.83479C8.92286 9.44952 8.88568 8.78585 9.2526 8.35243Z" />
        </svg>
    )
}

export default ArrowDownSpecialIcon;