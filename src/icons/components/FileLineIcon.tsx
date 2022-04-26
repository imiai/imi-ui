import React from 'react';
import { IIconsProps } from './icons.types';

const FileLineIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M19.2943 6.15109L15.3385 2.58773C14.9177 2.20871 14.367 2 13.7878 2H6.25641C5.01223 2 4 2.96379 4 4.14844V19.8516C4 21.0362 5.01223 22 6.25641 22H17.7436C18.9878 22 20 21.0362 20 19.8516V7.7118C20 7.12395 19.7428 6.55508 19.2943 6.15109ZM18 7H16C15.8869 7 15 7 15 6V4L18 7ZM17 20H7C6.43446 20 6 19.6345 6 19.096V5C6 4.46152 6.4601 4.02344 7.02564 4.02344L13 4V7C13 7.75387 13.5 9 15 9H18V19C18 19.5385 17.5655 20 17 20Z" />
            <path d="M14 11H8C7.73491 11 7 11 7 12C7 13 7.73491 13 8 13H14C14.5 13 15 12.5742 15 12C15 11.4258 14.5 11 14 11Z" />
            <path d="M14 14H8C7.5 14 7 14.5 7 15C7 15.5 7.5 16 8 16H14C14.5 16 15 15.5 15 15C15 14.5 14.5 14 14 14Z" />
            <path d="M11 17H8C7.49996 17 7 17.5 7 18C7 18.5 7.49996 19 8 19H11C11.5 19 12 18.5 12 18C12 17.5 11.5 17 11 17Z" />
        </svg>
    )
}

export default FileLineIcon;