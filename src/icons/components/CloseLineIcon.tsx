import React from 'react';
import { IIconsProps } from './icons.types';

const CloseLineIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.7768 4.22989C19.4793 3.92337 18.9969 3.92337 18.6993 4.22989L12 11.1314L5.30065 4.22989C5.00311 3.92337 4.5207 3.92337 4.22316 4.22989C3.92561 4.53641 3.92561 5.03338 4.22316 5.33991L10.9225 12.2414L4.6919 18.6601C4.39436 18.9666 4.39436 19.4636 4.6919 19.7701C4.98944 20.0766 5.47185 20.0766 5.76939 19.7701L12 13.3515L18.2306 19.7701C18.5281 20.0766 19.0106 20.0766 19.3081 19.7701C19.6056 19.4636 19.6056 18.9666 19.3081 18.6601L13.0775 12.2414L19.7768 5.33991C20.0744 5.03339 20.0744 4.53641 19.7768 4.22989Z" />
        </svg>
    )
}

export default CloseLineIcon;