import React from 'react';
import { IIconsProps } from './icons.types';

const AddUserIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
           <path fillRule="evenodd" clipRule="evenodd" d="M19 2C19.5523 2 20 2.44772 20 3V5H22C22.5523 5 23 5.44772 23 6C23 6.55228 22.5523 7 22 7H20V9C20 9.55228 19.5523 10 19 10C18.4477 10 18 9.55228 18 9V7H16C15.4477 7 15 6.55228 15 6C15 5.44772 15.4477 5 16 5H18V3C18 2.44772 18.4477 2 19 2ZM13.175 7.675C13.175 10.2569 11.0819 12.35 8.5 12.35C5.91807 12.35 3.825 10.2569 3.825 7.675C3.825 5.09307 5.91807 3 8.5 3C11.0819 3 13.175 5.09307 13.175 7.675ZM0 20C0 16.6863 2.68629 14 6 14H11C14.3137 14 17 16.6863 17 20C17 21.1046 16.1046 22 15 22H2C0.89543 22 0 21.1046 0 20Z" />
        </svg>
    )
}

export default AddUserIcon;