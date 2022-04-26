import React from 'react';
import { IIconsProps } from './icons.types';

const SearchLineIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3773 10.1886C17.3773 14.1588 14.1588 17.3773 10.1886 17.3773C6.21847 17.3773 3 14.1588 3 10.1886C3 6.21847 6.21847 3 10.1886 3C14.1588 3 17.3773 6.21847 17.3773 10.1886ZM15.8532 17.4241C14.2924 18.6477 12.3257 19.3773 10.1886 19.3773C5.1139 19.3773 1 15.2634 1 10.1886C1 5.1139 5.1139 1 10.1886 1C15.2634 1 19.3773 5.1139 19.3773 10.1886C19.3773 12.325 18.6482 14.2911 17.4253 15.8517L22.5219 20.463C23.1397 21.0219 23.1638 21.9842 22.5747 22.5733C21.9856 23.1624 21.0233 23.1384 20.4643 22.5206L15.8532 17.4241Z" />
        </svg>
    )
}

export default SearchLineIcon;