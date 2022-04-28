import React from 'react';
import { IIconsProps } from './icons.types';

const ArrowDownIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
           <path fillRule="evenodd" clipRule="evenodd" d="M4.28869 8.40278C4.70802 7.90744 5.43039 7.86282 5.90214 8.30312L12 13.9945L18.0979 8.30312C18.5696 7.86282 19.292 7.90744 19.7113 8.40278C20.1306 8.89811 20.0882 9.6566 19.6164 10.0969L12.7593 16.4969C12.3263 16.901 11.6737 16.901 11.2407 16.4969L4.3836 10.0969C3.91184 9.6566 3.86935 8.89811 4.28869 8.40278Z" />
        </svg>
    )
}

export default ArrowDownIcon;