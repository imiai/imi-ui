import React from 'react';
import { IIconsProps } from './icons.types';

const SwitchOffIcon = (props: IIconsProps) => {
    const { className = '' } = props;
    return (
        <svg width="32" height="20" className={className} viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="3" width="30" height="14" rx="7" fill="#A9B9C7"/>
            <rect width="20" height="20" rx="10" fill="#7790A6"/>
        </svg>        
    )
}

export default SwitchOffIcon;