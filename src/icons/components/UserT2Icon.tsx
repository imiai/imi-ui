import React from 'react';
import { IIconsProps } from './icons.types';

const UserT2Icon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.175 7.675C13.175 10.2569 11.0819 12.35 8.5 12.35C5.91807 12.35 3.825 10.2569 3.825 7.675C3.825 5.09307 5.91807 3 8.5 3C11.0819 3 13.175 5.09307 13.175 7.675ZM0 20C0 16.6863 2.68629 14 6 14H11C14.3137 14 17 16.6863 17 20C17 21.1046 16.1046 22 15 22H2C0.89543 22 0 21.1046 0 20ZM18 12.4C19.8225 12.4 21.3 10.9225 21.3 9.1C21.3 7.27746 19.8225 5.8 18 5.8C16.1775 5.8 14.7 7.27746 14.7 9.1C14.7 10.9225 16.1775 12.4 18 12.4ZM15.6 13.5C15.3425 13.5 15.0914 13.527 14.8492 13.5784C16.5236 14.6124 17.7464 16.3077 18.1531 18.3H22.8C23.4627 18.3 24 17.7628 24 17.1C24 15.1118 22.3882 13.5 20.4 13.5H15.6Z" />
        </svg>
    )
}

export default UserT2Icon;