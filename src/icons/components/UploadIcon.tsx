import React from 'react';
import { IIconsProps } from './icons.types';

const UploadIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2H6C4.89556 2 4 2.89556 4 4V20C4 21.1047 4.89556 22 6 22H18C19.1047 22 20 21.1047 20 20V6.00089L16 2ZM12 9L14 11H13V13H11.0004V11H10L12 9ZM16 15V17H14H10H8V15V13H10V15H14V13H16V15ZM15 7.00044V3.00044L19 7.00044H15Z" />
        </svg>
    )
}

export default UploadIcon;