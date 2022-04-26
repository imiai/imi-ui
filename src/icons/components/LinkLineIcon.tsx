import React from 'react';
import { IIconsProps } from './icons.types';

const LinkLineIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 5.25216C14.3754 3.58392 17.0801 3.58392 18.7483 5.25215C20.4166 6.92039 20.4166 9.62514 18.7483 11.2934L17.2573 12.7845C16.8667 13.175 16.8667 13.8081 17.2573 14.1987C17.6478 14.5892 18.281 14.5892 18.6715 14.1987L20.1626 12.7076C22.6118 10.2583 22.6118 6.28723 20.1626 3.83794C17.7133 1.38865 13.7422 1.38866 11.2929 3.83794L9.80183 5.32903C9.41131 5.71955 9.41131 6.35271 9.80183 6.74324C10.1924 7.13376 10.8255 7.13376 11.216 6.74324L12.7071 5.25216ZM5.25173 12.7075C3.58349 14.3758 3.58349 17.0805 5.25173 18.7487C6.91996 20.417 9.62471 20.417 11.2929 18.7487L12.784 17.2577C13.1746 16.8671 13.8077 16.8671 14.1982 17.2577C14.5888 17.6482 14.5888 18.2813 14.1982 18.6719L12.7072 20.163C10.2579 22.6122 6.2868 22.6122 3.83751 20.163C1.38823 17.7137 1.38823 13.7426 3.83751 11.2933L5.3286 9.80223C5.71912 9.4117 6.35229 9.4117 6.74281 9.80223C7.13334 10.1928 7.13334 10.8259 6.74281 11.2164L5.25173 12.7075ZM8.27238 14.2371C7.86063 14.6488 7.86063 15.3164 8.27238 15.7282C8.68414 16.1399 9.35172 16.1399 9.76347 15.7282L15.7278 9.76382C16.1396 9.35207 16.1396 8.68449 15.7278 8.27274C15.3161 7.86099 14.6485 7.86099 14.2367 8.27274L8.27238 14.2371Z" />
        </svg>
    )
}

export default LinkLineIcon;