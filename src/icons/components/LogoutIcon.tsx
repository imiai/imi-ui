import React from 'react';
import { IIconsProps } from './icons.types';

const LogoutIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 3.51472 4.01472 1.5 6.5 1.5H12.5C14.9853 1.5 17 3.51472 17 6C17 6.82843 16.3284 7.5 15.5 7.5C14.6716 7.5 14 6.82843 14 6C14 5.17157 13.3284 4.5 12.5 4.5H6.5C5.67157 4.5 5 5.17157 5 6V18C5 18.8284 5.67157 19.5 6.5 19.5H12.5C13.3284 19.5 14 18.8284 14 18C14 17.1716 14.6716 16.5 15.5 16.5C16.3284 16.5 17 17.1716 17 18C17 20.4853 14.9853 22.5 12.5 22.5H6.5C4.01472 22.5 2 20.4853 2 18V6ZM8.5 12C8.5 11.1716 9.17157 10.5 10 10.5L17.5 10.5V9.41421C17.5 8.52331 18.5771 8.07714 19.2071 8.70711L21.7929 11.2929C22.1834 11.6834 22.1834 12.3166 21.7929 12.7071L19.2071 15.2929C18.5771 15.9229 17.5 15.4767 17.5 14.5858V13.5L10 13.5C9.17157 13.5 8.5 12.8284 8.5 12Z" />
        </svg>
    )
}

export default LogoutIcon;