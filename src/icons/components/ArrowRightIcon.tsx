import React from 'react';
import { IIconsProps } from './icons.types';

const ArrowRightIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.40278 4.28869C7.90744 4.70802 7.86282 5.43039 8.30312 5.90214L13.9945 12L8.30312 18.0979C7.86282 18.5696 7.90744 19.292 8.40278 19.7113C8.89811 20.1306 9.6566 20.0882 10.0969 19.6164L16.4969 12.7593C16.901 12.3263 16.901 11.6737 16.4969 11.2407L10.0969 4.3836C9.6566 3.91184 8.89811 3.86935 8.40278 4.28869Z" />
        </svg>
    )
}

export default ArrowRightIcon;