import React from 'react';
import { IIconsProps } from './icons.types';

const EditIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M21.0106 2.98892C19.692 1.67036 17.5542 1.67036 16.2357 2.98892L14.644 4.58057L19.419 9.3555L21.0106 7.76386C22.3292 6.44529 22.3292 4.30748 21.0106 2.98892ZM17.8273 10.9471L13.0524 6.17221L2.75958 16.465C2.72525 16.4993 2.70299 16.5439 2.69612 16.5919L2.00516 21.4287C1.95802 21.7587 2.24086 22.0415 2.57084 21.9944L7.4076 21.3034C7.45566 21.2965 7.50019 21.2743 7.53451 21.24L17.8273 10.9471Z" />
        </svg>
    )
}

export default EditIcon;