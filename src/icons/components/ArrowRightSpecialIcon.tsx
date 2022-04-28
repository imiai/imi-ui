import React from 'react';
import { IIconsProps } from './icons.types';

const ArrowRightSpecialIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
           <path fillRule="evenodd" clipRule="evenodd" d="M12.6525 5.2526C12.2191 5.61952 12.18 6.25159 12.5653 6.66437L17.5452 12L12.5653 17.3356C12.18 17.7484 12.2191 18.3805 12.6525 18.7474C13.0859 19.1143 13.7496 19.0771 14.1348 18.6644L19.7348 12.6644C20.0885 12.2855 20.0885 11.7145 19.7348 11.3356L14.1348 5.33565C13.7496 4.92286 13.0859 4.88568 12.6525 5.2526Z" />
        </svg>
    )
}

export default ArrowRightSpecialIcon;