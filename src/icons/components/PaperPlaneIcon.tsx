import React from 'react';
import { IIconsProps } from './icons.types';

const PaperPlaneIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M6.60901 18.5736H11.044L13.9765 21.5027C14.1341 21.6612 14.3215 21.787 14.5278 21.8728C14.7342 21.9586 14.9555 22.0027 15.179 22.0027C15.3261 22.0025 15.4725 21.9838 15.6148 21.9469C15.9025 21.8743 16.166 21.7271 16.3787 21.5203C16.5915 21.3134 16.7459 21.0541 16.8265 20.7686L21.999 3.17773L6.60901 18.5736Z" />
            <path d="M5.414 17.4067L20.8182 2L3.23983 7.18417C2.95361 7.26557 2.69365 7.42038 2.48573 7.63326C2.27781 7.84614 2.12917 8.10968 2.05454 8.39774C1.97991 8.6858 1.9819 8.98837 2.06031 9.27542C2.13871 9.56248 2.2908 9.82404 2.5015 10.0342L5.414 12.9442V17.4067Z" />
        </svg>
    )
}

export default PaperPlaneIcon;