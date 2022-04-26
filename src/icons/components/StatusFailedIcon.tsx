import React from 'react';
import { IIconsProps } from './icons.types';

const StatusFailedIcon = (props: IIconsProps) => {
    const { className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#E11444"/>
            <path d="M14.1209 8.46538L12.0005 10.5866L9.88001 8.46538C9.48939 8.07462 8.85594 8.07456 8.46525 8.46525C8.07456 8.85594 8.07462 9.48939 8.46538 9.88001L10.5866 12.0005L8.46538 14.1209C8.07462 14.5115 8.07456 15.145 8.46525 15.5357C8.85594 15.9263 9.48939 15.9263 9.88001 15.5355L12.0005 13.4143L14.1209 15.5355C14.5115 15.9263 15.145 15.9263 15.5357 15.5357C15.9263 15.145 15.9263 14.5115 15.5355 14.1209L13.4143 12.0005L15.5355 9.88001C15.9263 9.48939 15.9263 8.85594 15.5357 8.46525C15.145 8.07456 14.5115 8.07462 14.1209 8.46538Z" fill="white"/>
        </svg>
    )
}

export default StatusFailedIcon;