import React from 'react';
import { IIconsProps } from './icons.types';

const ArrowUpIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M4.28869 16.5972C4.70802 17.0926 5.43039 17.1372 5.90214 16.6969L12 11.0055L18.0979 16.6969C18.5696 17.1372 19.292 17.0926 19.7113 16.5972C20.1306 16.1019 20.0882 15.3434 19.6164 14.9031L12.7593 8.50311C12.3263 8.09896 11.6737 8.09896 11.2407 8.50311L4.3836 14.9031C3.91184 15.3434 3.86935 16.1019 4.28869 16.5972Z" />
        </svg>
    )
}

export default ArrowUpIcon;