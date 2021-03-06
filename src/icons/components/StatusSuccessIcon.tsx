import React from 'react';
import { IIconsProps } from './icons.types';

const StatusSuccessIcon = (props: IIconsProps) => {
    const { className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12.2681" cy="12.6768" rx="10" ry="10" fill="#28C2A5" />
            <path fillRule="evenodd" clipRule="evenodd" d="M16.9752 8.96965C17.3657 9.36018 17.3657 9.99334 16.9752 10.3839L11.4752 15.8839C11.0846 16.2744 10.4515 16.2744 10.061 15.8839L7.56096 13.3839C7.17044 12.9933 7.17044 12.3602 7.56096 11.9697C7.95148 11.5791 8.58465 11.5791 8.97517 11.9697L10.7681 13.7625L15.561 8.96965C15.9515 8.57913 16.5846 8.57913 16.9752 8.96965Z" fill="white" />
        </svg>
    )
}

export default StatusSuccessIcon;