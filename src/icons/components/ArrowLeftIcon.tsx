import React from 'react';
import { IIconsProps } from './icons.types';

const ArrowLeftIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
           <path fillRule="evenodd" clipRule="evenodd" d="M16.5973 4.28869C17.0926 4.70802 17.1373 5.43039 16.697 5.90214L11.0056 12L16.697 18.0979C17.1373 18.5696 17.0926 19.292 16.5973 19.7113C16.102 20.1306 15.3435 20.0882 14.9032 19.6164L8.50318 12.7593C8.09904 12.3263 8.09904 11.6737 8.50318 11.2407L14.9032 4.3836C15.3435 3.91184 16.102 3.86935 16.5973 4.28869Z" />
        </svg>
    )
}

export default ArrowLeftIcon;