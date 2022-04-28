import React from 'react';
import { IIconsProps } from './icons.types';

const CopyLineIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2 4C2 2.34315 3.34315 1 5 1H13C14.6569 1 16 2.34315 16 4H14C14 3.44772 13.5523 3 13 3H5C4.44772 3 4 3.44772 4 4V15C4 15.5523 4.44772 16 5 16H6V18H5C3.34315 18 2 16.6569 2 15V4ZM8 9C8 7.34315 9.34315 6 11 6H19C20.6569 6 22 7.34315 22 9V17.6591C22 18.4397 21.6957 19.1895 21.1518 19.7494L18.8778 22.0904C18.3129 22.6719 17.5367 23 16.726 23H11C9.34315 23 8 21.6569 8 20V9ZM11 8C10.4477 8 10 8.44772 10 9V20C10 20.5523 10.4477 21 11 21H15V18C15 16.8954 15.8954 16 17 16H20V9C20 8.44772 19.5523 8 19 8H11ZM19.9401 18H17V20.9617C17.1669 20.9142 17.3201 20.8235 17.4433 20.6968L19.7173 18.3559C19.8168 18.2534 19.8923 18.1319 19.9401 18Z" />
        </svg>
    )
}

export default CopyLineIcon;