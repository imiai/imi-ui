import React from 'react';
import { IIconsProps } from './icons.types';

const MailIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.27241 6.54616C2.43063 6.81743 2.65289 7.05185 2.92625 7.2258L10.9262 12.3167C11.5814 12.7336 12.4186 12.7336 13.0738 12.3167L21.0737 7.2258C21.3471 7.05185 21.5694 6.81743 21.7276 6.54616C21.1459 5.05584 19.6963 4 18 4H6C4.30374 4 2.85409 5.05584 2.27241 6.54616ZM22 9.00699L14.1475 14.004C12.8372 14.8378 11.1628 14.8378 9.8525 14.004L2 9.00699V16C2 18.2091 3.79086 20 6 20H18C20.2091 20 22 18.2091 22 16V9.00699Z"/>
        </svg>
    )
}

export default MailIcon;