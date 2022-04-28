import React from 'react';
import { IIconsProps } from './icons.types';

const LockResetIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 8V9H8V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8ZM21 12C21 10.3431 19.6569 9 18 9V8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8V9C4.34315 9 3 10.3431 3 12V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V12ZM9.50667 14.3674C9.87045 13.3382 10.8521 12.6024 12.0038 12.6024C12.7129 12.6024 13.3575 12.8813 13.8331 13.3359L13.3638 13.5769C13.0065 13.7604 13.0494 14.2842 13.4317 14.4071L15.3463 15.0225C15.4649 15.0606 15.5918 14.9954 15.6299 14.8769L16.2453 12.9623C16.3682 12.58 15.9675 12.2399 15.6102 12.4233L15.0813 12.6949C14.3479 11.8124 13.242 11.25 12.0038 11.25C10.2611 11.25 8.78037 12.364 8.23157 13.9167C8.10712 14.2688 8.29167 14.6552 8.64378 14.7796C8.99589 14.9041 9.38222 14.7195 9.50667 14.3674ZM12.0038 19.25C10.8086 19.25 9.73669 18.726 9.00406 17.8959L8.38704 18.2114C8.02944 18.3942 7.62932 18.0534 7.75291 17.6713L8.19484 16.3048C8.20326 16.1987 8.23671 16.0966 8.29123 16.0068L8.37176 15.7578C8.41007 15.6393 8.53714 15.5744 8.65558 15.6127L8.86858 15.6815C9.01208 15.6814 9.15092 15.7274 9.26526 15.8098L10.5691 16.2315C10.9512 16.3551 10.9932 16.879 10.6356 17.0618L10.2683 17.2496C10.7333 17.6534 11.3403 17.8976 12.0038 17.8976C13.1555 17.8976 14.1371 17.1618 14.5009 16.1326C14.6254 15.7805 15.0117 15.5959 15.3638 15.7204C15.7159 15.8448 15.9005 16.2312 15.776 16.5833C15.2272 18.136 13.7465 19.25 12.0038 19.25Z" />
        </svg>
    )
}

export default LockResetIcon;