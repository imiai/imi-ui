import React from 'react';
import { IIconsProps } from './icons.types';

const HomeIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2 11C2 10.0557 2.44458 9.16656 3.2 8.6L10.2 3.35C11.2667 2.55 12.7333 2.55 13.8 3.35L20.8 8.6C21.5554 9.16656 22 10.0557 22 11V20C22 21.1046 21.1046 22 20 22H16.1818C15.6295 22 15.1818 21.5523 15.1818 21V18.1667C15.1818 17.0621 14.2864 16.1667 13.1818 16.1667H10.8182C9.71361 16.1667 8.81818 17.0621 8.81818 18.1667V21C8.81818 21.5523 8.37047 22 7.81818 22H4C2.89543 22 2 21.1046 2 20V11Z" />
        </svg>
    )
}

export default HomeIcon;