import React from 'react';
import { IIconsProps } from './icons.types';

const ThunderAutoIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2H8.10007C6.83855 2 5.71306 2.7892 5.28195 3.97477L2.48795 11.6583C2.2508 12.3104 2.73378 13 3.42775 13H6.00005L4.50005 22L18 8H12L16 2ZM13.2931 10H8.26302L12.263 4H8.10007C7.68054 4 7.30558 4.26215 7.16154 4.65826L4.85545 11H8.36097L7.53187 15.9746L13.2931 10Z" />
            <path d="M20.5817 7L20.1316 5.57766H17.8684L17.4183 7H16L18.1911 1H19.8004L22 7H20.5817ZM19.8174 4.51499C19.4013 3.22616 19.1663 2.49728 19.1125 2.32834C19.0616 2.1594 19.0248 2.02589 19.0021 1.92779C18.9087 2.27657 18.6412 3.13896 18.1996 4.51499H19.8174Z" />
        </svg>
    )
}

export default ThunderAutoIcon;