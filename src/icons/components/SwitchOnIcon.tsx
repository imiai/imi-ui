import React from 'react';
import { IIconsProps } from './icons.types';

const SwitchOnIcon = (props: IIconsProps) => {
    const { className = '' } = props;
    return (
        <svg width="32" height="20" className={className} viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="3" width="32" height="14" rx="7" fill="#81BFF9"/>
            <rect x="12" width="20" height="20" rx="10" fill="#2F80ED"/>
        </svg>        
    )
}

export default SwitchOnIcon;