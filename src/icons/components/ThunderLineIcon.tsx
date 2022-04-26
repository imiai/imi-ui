import React from 'react';
import { IIconsProps } from './icons.types';

const ThunderLineIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 2H10.1C8.83849 2 7.713 2.7892 7.28189 3.97477L4.48789 11.6583C4.25074 12.3104 4.73372 13 5.42769 13H7.99999L6.49999 22L20 8H14L18 2ZM15.293 10H10.263L14.2629 4H10.1C9.68048 4 9.30551 4.26215 9.16147 4.65826L6.85539 11H10.3609L9.53181 15.9746L15.293 10Z" />
        </svg>
    )
}

export default ThunderLineIcon;