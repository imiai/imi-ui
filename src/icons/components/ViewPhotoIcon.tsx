import React from 'react';
import { IIconsProps } from './icons.types';

const ViewPhotoIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2 7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7ZM10.5461 11.2143C10.3034 10.9286 9.69663 10.9286 9.45393 11.2143L5.08542 16.3571C4.84272 16.6429 5.14609 17 5.63148 17H13.5635H14.3685H18.4365C18.8696 17 19.1404 16.6491 18.9238 16.3684L16.4873 13.2105C16.2707 12.9298 15.7293 12.9298 15.5127 13.2105L13.9558 15.2284L10.5461 11.2143ZM16.5 10C17.3284 10 18 9.32843 18 8.5C18 7.67157 17.3284 7 16.5 7C15.6716 7 15 7.67157 15 8.5C15 9.32843 15.6716 10 16.5 10Z" />
        </svg>
    )
}

export default ViewPhotoIcon;