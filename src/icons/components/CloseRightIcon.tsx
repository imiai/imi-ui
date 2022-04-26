import React from 'react';
import { IIconsProps } from './icons.types';

const CloseRightIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7072 5.29746C22.3166 4.90085 21.6835 4.90085 21.293 5.29746L16.0001 10.6729L10.7072 5.29746C10.3166 4.90085 9.68348 4.90085 9.29295 5.29746C8.90243 5.69407 8.90243 6.33711 9.29295 6.73372L14.5858 12.1091L9.50784 17.2663C9.11732 17.6629 9.11732 18.3059 9.50784 18.7025C9.89837 19.0992 10.5315 19.0992 10.9221 18.7025L16.0001 13.5454L21.0781 18.7025C21.4686 19.0992 22.1018 19.0992 22.4923 18.7025C22.8828 18.3059 22.8828 17.6629 22.4923 17.2663L17.4143 12.1091L22.7072 6.73372C23.0977 6.33711 23.0977 5.69407 22.7072 5.29746Z" />
        </svg>
    )
}

export default CloseRightIcon;