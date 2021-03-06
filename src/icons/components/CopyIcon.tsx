import React from 'react';
import { IIconsProps } from './icons.types';

const CopyIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2 3C2 1.89543 2.89543 1 4 1H14C15.1046 1 16 1.89543 16 3V4H9C7.34315 4 6 5.34315 6 7V18H4C2.89543 18 2 17.1046 2 16V3ZM8 8C8 6.89543 8.89543 6 10 6H20C21.1046 6 22 6.89543 22 8V18.1716C22 18.702 21.7893 19.2107 21.4142 19.5858L18.5858 22.4142C18.2107 22.7893 17.702 23 17.1716 23H10C8.89543 23 8 22.1046 8 21V8ZM20 18L16 22V18H20Z" />
        </svg>
    )
}

export default CopyIcon;