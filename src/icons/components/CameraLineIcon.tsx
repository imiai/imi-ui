import React from 'react';
import { IIconsProps } from './icons.types';

const CameraLineIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9882 4.5C10.6339 4.5 10.2954 4.64656 10.053 4.90492C9.43246 5.56615 8.56607 5.94125 7.65928 5.94125H6.9412C5.31682 5.94125 4 7.25807 4 8.88245V16.0013C4 17.6581 5.34314 19.0013 7 19.0013H17.8251C19.4819 19.0013 20.8251 17.6581 20.8251 16.0013V8.77188C20.8251 7.20857 19.5577 5.94125 17.9944 5.94125H17.1081C16.219 5.94125 15.3769 5.54185 14.8144 4.85333C14.6317 4.62971 14.3582 4.5 14.0694 4.5H10.9882ZM8.59455 3.53633C9.21506 2.8751 10.0814 2.5 10.9882 2.5H14.0694C14.9585 2.5 15.8006 2.8994 16.3632 3.58793C16.5459 3.81154 16.8193 3.94125 17.1081 3.94125H17.9944C20.6623 3.94125 22.8251 6.104 22.8251 8.77188V16.0013C22.8251 18.7627 20.5865 21.0013 17.8251 21.0013H7C4.23857 21.0013 2 18.7627 2 16.0013V8.88245C2 6.15351 4.21225 3.94125 6.9412 3.94125H7.65928C8.01358 3.94125 8.3521 3.79469 8.59455 3.53633ZM12.4119 15.1769C13.9065 15.1769 15.1181 13.9652 15.1181 12.4706C15.1181 10.976 13.9065 9.76435 12.4119 9.76435C10.9172 9.76435 9.7056 10.976 9.7056 12.4706C9.7056 13.9652 10.9172 15.1769 12.4119 15.1769ZM12.4119 17.1769C15.0111 17.1769 17.1181 15.0698 17.1181 12.4706C17.1181 9.87141 15.0111 7.76435 12.4119 7.76435C9.81267 7.76435 7.7056 9.87141 7.7056 12.4706C7.7056 15.0698 9.81267 17.1769 12.4119 17.1769ZM19.0006 8.70563C19.5205 8.70563 19.9419 8.28421 19.9419 7.76437C19.9419 7.24454 19.5205 6.82312 19.0006 6.82312C18.4808 6.82312 18.0594 7.24454 18.0594 7.76437C18.0594 8.28421 18.4808 8.70563 19.0006 8.70563Z" />
        </svg>
    )
}

export default CameraLineIcon;