import React from 'react';
import { IIconsProps } from './icons.types';

const CameraReverseIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.90833 4.5C3.74982 4.5 2 6.24982 2 8.40833V16.5C2 18.7091 3.79086 20.5 6 20.5H18C20.2091 20.5 22 18.7091 22 16.5V8.40833C22 6.24982 20.2502 4.5 18.0917 4.5H16.9014C16.3383 4.5 15.8124 4.21856 15.5 3.75C15.1876 3.28144 14.6617 3 14.0986 3H9.90139C9.33825 3 8.81237 3.28144 8.5 3.75C8.18763 4.21856 7.66175 4.5 7.09861 4.5H5.90833ZM20 7.5C20 8.05228 19.5523 8.5 19 8.5C18.4477 8.5 18 8.05228 18 7.5C18 6.94772 18.4477 6.5 19 6.5C19.5523 6.5 20 6.94772 20 7.5ZM9.01185 10.8341C9.44794 9.47474 10.6247 8.5026 12.0057 8.5026C12.8687 8.5026 13.6519 8.88222 14.2245 9.49872L13.4366 9.9445C13.0763 10.1483 13.1196 10.7303 13.5051 10.8669L15.9162 11.7208C16.0357 11.7631 16.1637 11.6907 16.2022 11.559L16.9772 8.90249C17.1011 8.47767 16.697 8.09983 16.3367 8.30366L15.4826 8.78688C14.6505 7.69477 13.4022 7 12.0057 7C10.0287 7 8.34868 8.39242 7.72602 10.3334C7.60052 10.7246 7.78663 11.1538 8.1417 11.2921C8.49677 11.4304 8.88635 11.2253 9.01185 10.8341ZM10.5654 14.2332L9.89395 14.6114C10.4553 15.1627 11.1953 15.4974 12.0057 15.4974C13.3867 15.4974 14.5634 14.5253 14.9995 13.1659C15.125 12.7747 15.5146 12.5696 15.8697 12.7079C16.2248 12.8462 16.4109 13.2754 16.2854 13.6666C15.6627 15.6076 13.9827 17 12.0057 17C10.6593 17 9.45059 16.3542 8.61985 15.329L7.66257 15.8683C7.30196 16.0714 6.89847 15.6927 7.0231 15.2682L7.80243 12.6132C7.84106 12.4816 7.9692 12.4094 8.08864 12.452L10.4983 13.3106C10.8837 13.448 10.926 14.03 10.5654 14.2332Z" />
        </svg>
    )
}

export default CameraReverseIcon;