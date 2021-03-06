import React from 'react';
import { IIconsProps } from './icons.types';

const SortIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.7894 20.9851C12.389 21.4999 11.611 21.4999 11.2106 20.9851L6.25529 14.6139C5.7444 13.9571 6.21249 13 7.04464 13H16.9554C17.7875 13 18.2556 13.9571 17.7447 14.6139L12.7894 20.9851Z" />
            <path fillRule="evenodd" clipRule="evenodd" d="M11.2106 3.01488C11.611 2.50013 12.389 2.50014 12.7894 3.01488L17.7447 9.38606C18.2556 10.0429 17.7875 11 16.9554 11H7.04464C6.21249 11 5.7444 10.0429 6.25529 9.38606L11.2106 3.01488Z" />
        </svg>
    )
}

export default SortIcon;