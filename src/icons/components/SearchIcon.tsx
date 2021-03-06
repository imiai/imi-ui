import React from 'react';
import { IIconsProps } from './icons.types';

const SearchIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.0951 10.5476C17.0951 14.1637 14.1637 17.0951 10.5476 17.0951C6.93145 17.0951 4 14.1637 4 10.5476C4 6.93145 6.93145 4 10.5476 4C14.1637 4 17.0951 6.93145 17.0951 10.5476ZM16.1237 18.2985C14.5549 19.4291 12.629 20.0951 10.5476 20.0951C5.27459 20.0951 1 15.8206 1 10.5476C1 5.27459 5.27459 1 10.5476 1C15.8206 1 20.0951 5.27459 20.0951 10.5476C20.0951 12.629 19.4291 14.5549 18.2985 16.1237L22.4022 19.8366C23.1725 20.5336 23.2025 21.7334 22.468 22.468C21.7334 23.2025 20.5336 23.1725 19.8366 22.4022L16.1237 18.2985Z" />
        </svg>
    )
}

export default SearchIcon;