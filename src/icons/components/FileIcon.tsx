import React from 'react';
import { IIconsProps } from './icons.types';

const FileIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M15 9C14.2082 9 13 8.5 13 7V2H6.25641C5.01223 2 4 2.96379 4 4.14844V19.8516C4 21.0362 5.01223 22 6.25641 22H17.7436C18.9878 22 20 21.0362 20 19.8516V9H15ZM8 17H11C11.5 17 12 17.5 12 18C12 18.5 11.5 19 11 19H8C7.5 19 7 18.6172 7 18C7 17.3828 7.5 17 8 17ZM7 15C7 14.4023 7.5 14 8 14H14C14.5 14 15 14.5 15 15C15 15.5 14.5 16 14 16H8C7.5 16 7 15.5977 7 15ZM14 11C14.5 11 15 11.5 15 12C15 12.5 14.5 13 14 13H8C7.5 13 7 12.6014 7 12C7 11.3986 7.5 11 8 11H14Z" />
            <path d="M14.8308 6.49234C14.8308 6.60004 14.9228 6.68766 15.0359 6.68766H19.7257C19.6132 6.48977 19.4683 6.30801 19.2944 6.15125L15.3385 2.58789C15.185 2.44961 15.014 2.33426 14.8309 2.24316V6.49234H14.8308Z" />
    </svg>
    )
}

export default FileIcon;