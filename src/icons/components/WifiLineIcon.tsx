import React from 'react';
import { IIconsProps } from './icons.types';

const WifiLineIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9058 20.7164C19.2913 21.1119 19.9164 21.1119 20.3019 20.7164C20.6875 20.321 20.6875 19.6798 20.3019 19.2844L4.94418 3.53194C4.55865 3.13649 3.93356 3.13649 3.54802 3.53194C3.16249 3.92738 3.16249 4.56853 3.54802 4.96398L5.37909 6.8421C4.19799 7.54369 3.13419 8.4245 2.24527 9.44718C1.88296 9.86401 1.92716 10.4956 2.34399 10.8579C2.76082 11.2203 3.39244 11.1761 3.75476 10.7592C4.60778 9.77784 5.65538 8.94983 6.82278 8.32289L9.17846 10.7391C7.72418 11.2646 6.46321 12.1926 5.54286 13.4198C5.2115 13.8616 5.30107 14.4884 5.7429 14.8198C6.18474 15.1512 6.81154 15.0616 7.1429 14.6198C8.0058 13.4692 9.28249 12.6594 10.7673 12.3688L18.9058 20.7164ZM14.1804 10.5567L18.1734 14.6523C18.5892 14.3018 18.6491 13.6812 18.3047 13.2573C17.2762 11.9914 15.8201 11.0228 14.1804 10.5567ZM9.09473 5.34037L10.7824 7.0714C11.1852 7.0245 11.5917 7.0004 12 7.0004C15.2983 7.0004 18.2413 8.45374 20.2453 10.7592C20.6076 11.1761 21.2392 11.2203 21.656 10.8579C22.0729 10.4956 22.1171 9.86401 21.7548 9.44718C19.3873 6.72342 15.9017 5.0004 12 5.0004C11.0147 5.0004 10.0398 5.11795 9.09473 5.34037ZM12.1286 20.1742C13.4067 20.1742 14.4429 19.1114 14.4429 17.8004C14.4429 16.4894 13.4067 15.4267 12.1286 15.4267C10.8505 15.4267 9.81432 16.4894 9.81432 17.8004C9.81432 19.1114 10.8505 20.1742 12.1286 20.1742Z" />
        </svg>
    )
}

export default WifiLineIcon;