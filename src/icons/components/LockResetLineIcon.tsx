import React from 'react';
import { IIconsProps } from './icons.types';

const LockResetLineIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 9V8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8V9H16ZM6 8V9C4.34315 9 3 10.3431 3 12V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V12C21 10.3431 19.6569 9 18 9V8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8ZM16 11H18C18.5523 11 19 11.4477 19 12V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V12C5 11.4477 5.44772 11 6 11H8H16ZM9.50714 14.6174C9.87092 13.5882 10.8525 12.8524 12.0043 12.8524C12.7134 12.8524 13.358 13.1313 13.8336 13.5859L13.3642 13.8269C13.007 14.0104 13.0499 14.5342 13.4322 14.6571L15.3468 15.2725C15.4653 15.3106 15.5923 15.2454 15.6304 15.1269L16.2458 13.2123C16.3687 12.83 15.968 12.4899 15.6107 12.6733L15.0818 12.9449C14.3484 12.0624 13.2425 11.5 12.0043 11.5C10.2616 11.5 8.78083 12.614 8.23204 14.1667C8.10759 14.5188 8.29214 14.9052 8.64425 15.0296C8.99636 15.1541 9.38269 14.9695 9.50714 14.6174ZM12.0043 19.5C10.8091 19.5 9.73715 18.976 9.00452 18.1459L8.38751 18.4614C8.02991 18.6442 7.62979 18.3034 7.75338 17.9213L8.19531 16.5548C8.20373 16.4487 8.23718 16.3466 8.2917 16.2568L8.37223 16.0078C8.41054 15.8893 8.53761 15.8244 8.65605 15.8627L8.86905 15.9315C9.01255 15.9314 9.15139 15.9774 9.26573 16.0598L10.5696 16.4815C10.9517 16.6051 10.9936 17.129 10.636 17.3118L10.2687 17.4996C10.7337 17.9034 11.3408 18.1476 12.0043 18.1476C13.156 18.1476 14.1376 17.4118 14.5014 16.3826C14.6258 16.0305 15.0122 15.8459 15.3643 15.9704C15.7164 16.0948 15.9009 16.4812 15.7765 16.8333C15.2277 18.386 13.7469 19.5 12.0043 19.5Z" />
        </svg>
    )
}

export default LockResetLineIcon;