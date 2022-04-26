import React from 'react';
import { IIconsProps } from './icons.types';

const ArrowSortDownIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C11.1716 4 10.5 4.67157 10.5 5.5V15.6989L5.90214 11.31C5.43039 10.8597 4.70802 10.9053 4.28869 11.4119C3.86935 11.9185 3.91184 12.6943 4.3836 13.1446L11.2407 19.69C11.6737 20.1033 12.3263 20.1033 12.7593 19.69L19.6164 13.1446C20.0882 12.6943 20.1306 11.9185 19.7113 11.4119C19.292 10.9053 18.5696 10.8597 18.0979 11.31L13.5 15.6989V5.5C13.5 4.67157 12.8284 4 12 4Z" />
        </svg>
    )
}

export default ArrowSortDownIcon;