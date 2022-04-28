import React from 'react';
import { IIconsProps } from './icons.types';

const ViewPhotoLineIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M19 6H5C4.44772 6 4 6.44772 4 7V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V7C20 6.44771 19.5523 6 19 6ZM5 4C3.34315 4 2 5.34315 2 7V17C2 18.6569 3.34315 20 5 20H19C20.6569 20 22 18.6569 22 17V7C22 5.34315 20.6569 4 19 4H5ZM10.5461 11.2143C10.3034 10.9286 9.69663 10.9286 9.45393 11.2143L5.08542 16.3571C4.84272 16.6429 5.14609 17 5.63148 17H13.5635H14.3685H18.4365C18.8696 17 19.1404 16.6491 18.9238 16.3684L16.4873 13.2105C16.2707 12.9298 15.7293 12.9298 15.5127 13.2105L13.9558 15.2284L10.5461 11.2143ZM16.5 10C17.3284 10 18 9.32843 18 8.5C18 7.67157 17.3284 7 16.5 7C15.6716 7 15 7.67157 15 8.5C15 9.32843 15.6716 10 16.5 10Z" />
        </svg>
    )
}

export default ViewPhotoLineIcon;