import React from 'react';
import { IIconsProps } from './icons.types';

const QuestionLineIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM11.8665 7C11.0328 7 10.2459 7.27221 9.50585 7.81662C9.19456 8.0194 9.02694 8.26693 9.00299 8.55923L9 8.63324L9.04215 8.61891C9.04215 8.82904 9.13115 9.02961 9.30913 9.22063C9.48712 9.4212 9.67447 9.52149 9.87119 9.52149C10.0867 9.52149 10.3583 9.41165 10.6862 9.19198C11.0703 8.89589 11.4637 8.74785 11.8665 8.74785C12.2131 8.74785 12.5082 8.84814 12.7518 9.04871C12.9859 9.24928 13.103 9.51194 13.103 9.83668C13.103 10.0659 13.0141 10.276 12.8361 10.467C12.6862 10.6294 12.3068 10.8921 11.6979 11.255C10.9953 11.6753 10.644 12.2053 10.644 12.8453C10.644 13.2273 10.7424 13.533 10.9391 13.7622C11.1358 13.9914 11.3888 14.106 11.6979 14.106C11.9602 14.106 12.171 14.0344 12.3302 13.8911C12.4895 13.7479 12.5691 13.5616 12.5691 13.3324C12.5691 13.2464 12.5644 13.1939 12.555 13.1748C12.5457 13.1557 12.541 13.1079 12.541 13.0315C12.541 12.7354 12.7518 12.4632 13.1733 12.2149C13.7073 11.9188 14.1475 11.5893 14.4941 11.2264C14.8314 10.873 15 10.4145 15 9.851C15 9.03916 14.7002 8.36103 14.1007 7.81662C13.4918 7.27221 12.7471 7 11.8665 7ZM11.6839 14.9083C11.3373 14.9083 11.0609 15.0086 10.8548 15.2092C10.6609 15.3897 10.5543 15.6127 10.5349 15.8784L10.5312 15.9651L10.5347 16.0521C10.5512 16.3073 10.6337 16.5137 10.782 16.6711L10.8408 16.7278C11.0469 16.9093 11.3138 17 11.6417 17C11.9696 17 12.2412 16.9093 12.4567 16.7278C12.6815 16.5463 12.7939 16.2884 12.7939 15.9541C12.7939 15.6581 12.6909 15.4097 12.4848 15.2092C12.2693 15.0086 12.0024 14.9083 11.6839 14.9083Z" />
        </svg>
    )
}

export default QuestionLineIcon;