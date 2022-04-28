import React from 'react';
import { IIconsProps } from './icons.types';

const BellRingingIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
           <path fillRule="evenodd" clipRule="evenodd" d="M11 1.6C11 0.992486 11.4925 0.5 12.1 0.5C12.7075 0.5 13.2 0.992487 13.2 1.6V2.57445C16.9181 3.13403 19.0746 6.74349 19.0746 9.82903V12.9774C19.0746 13.5452 19.304 14.0613 19.712 14.4484L20.3493 15.0161C21.1906 15.7903 21.2161 17.1065 20.4258 17.9065C20.0434 18.2935 19.559 18.5 19.0236 18.5H13.3384H10.6616H4.97639C4.44101 18.5 3.95662 18.2935 3.57421 17.9065C2.7839 17.1065 2.80939 15.7903 3.6507 15.0161L4.28805 14.4484C4.69595 14.0871 4.9254 13.5452 4.9254 12.9774V9.82903C4.9254 6.66442 7.15938 3.00231 11 2.54719V1.6ZM15.35 19.2C15.35 21.0225 13.8725 22.5 12.05 22.5C10.2275 22.5 8.75 21.0225 8.75 19.2H15.35ZM19.3857 2.71089C19.8216 2.37165 20.4499 2.44993 20.7891 2.88574C22.173 4.66355 23 6.98105 23 9.5C23 10.0523 22.5523 10.5 22 10.5C21.4477 10.5 21 10.0523 21 9.5C21 7.41798 20.3165 5.53455 19.2109 4.11426C18.8716 3.67844 18.9499 3.05014 19.3857 2.71089ZM3.21089 2.88574C3.55014 2.44993 4.17844 2.37165 4.61426 2.71089C5.05007 3.05014 5.12835 3.67844 4.78911 4.11426C3.68353 5.53455 3 7.41798 3 9.5C3 10.0523 2.55228 10.5 2 10.5C1.44772 10.5 1 10.0523 1 9.5C1 6.98105 1.82702 4.66355 3.21089 2.88574Z"/>
        </svg>
    )
}

export default BellRingingIcon;