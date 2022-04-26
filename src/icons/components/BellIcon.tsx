import React from 'react';
import { IIconsProps } from './icons.types';

const BellLineIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2727 3C10.2727 2.44771 10.7204 2 11.2727 2C11.825 2 12.2727 2.44772 12.2727 3V3.88586C15.6528 4.39457 17.6133 7.6759 17.6133 10.4809V13.3431C17.6133 13.8592 17.8219 14.3284 18.1927 14.6804L18.7721 15.1965C19.5369 15.9003 19.5601 17.0968 18.8416 17.824C18.494 18.176 18.0536 18.3636 17.5669 18.3636H12.3986H9.96506H4.79672C4.31001 18.3636 3.86966 18.176 3.52201 17.824C2.80354 17.0968 2.82672 15.9003 3.59154 15.1965L4.17095 14.6804C4.54177 14.3519 4.75036 13.8592 4.75036 13.3431V10.4809C4.75036 7.60402 6.78126 4.27483 10.2727 3.86108V3ZM14.4545 19C14.4545 20.6569 13.1114 22 11.4545 22C9.79769 22 8.45455 20.6569 8.45455 19H14.4545Z"/>
        </svg>
    )
}

export default BellLineIcon;