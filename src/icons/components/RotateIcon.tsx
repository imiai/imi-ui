import React from 'react';
import { IIconsProps } from './icons.types';

const RotateIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9451 11H21.4258C21.9564 11 22.202 11.6408 21.8009 11.9786L18.3752 14.864C18.1598 15.0453 17.8402 15.0453 17.6248 14.864L14.1991 11.9786C13.798 11.6408 14.0436 11 14.5742 11H16.9291C16.4439 7.60771 13.5265 5 10 5C6.13401 5 3 8.13401 3 12C3 15.866 6.13401 19 10 19C11.9082 19 13.6363 18.2378 14.9 16.999C15.2943 16.6124 15.9275 16.6187 16.3141 17.0131C16.7007 17.4075 16.6944 18.0406 16.3 18.4272C14.6777 20.0177 12.4526 21 10 21C5.02944 21 1 16.9706 1 12C1 7.02944 5.02944 3 10 3C14.6326 3 18.4476 6.50005 18.9451 11Z" />
        </svg>
    )
}

export default RotateIcon;