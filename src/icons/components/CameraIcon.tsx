import React from 'react';
import { IIconsProps } from './icons.types';

const CameraIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 8.40833C2 6.24982 3.74982 4.5 5.90833 4.5H7.09861C7.66175 4.5 8.18763 4.21856 8.5 3.75C8.81237 3.28144 9.33825 3 9.90139 3H14.0986C14.6617 3 15.1876 3.28144 15.5 3.75C15.8124 4.21856 16.3383 4.5 16.9014 4.5H18.0917C20.2502 4.5 22 6.24982 22 8.40833V16.5C22 18.7091 20.2091 20.5 18 20.5H6C3.79086 20.5 2 18.7091 2 16.5V8.40833ZM12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5ZM12 17.5C14.7614 17.5 17 15.2614 17 12.5C17 9.73858 14.7614 7.5 12 7.5C9.23858 7.5 7 9.73858 7 12.5C7 15.2614 9.23858 17.5 12 17.5ZM19 8.5C19.5523 8.5 20 8.05228 20 7.5C20 6.94772 19.5523 6.5 19 6.5C18.4477 6.5 18 6.94772 18 7.5C18 8.05228 18.4477 8.5 19 8.5Z" />
        </svg>
    )
}

export default CameraIcon;