import React from 'react';
import { IIconsProps } from './icons.types';

const RequestIcon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.89286 15.3766H4.16071C3.58789 15.3759 3.03875 15.1669 2.6337 14.7955C2.22866 14.424 2.00077 13.9205 2 13.3952V4.98143C2.00016 4.45597 2.22786 3.95207 2.63303 3.58051C3.03821 3.20895 3.58771 3.00015 4.16071 3H15.1964C15.7694 3.00015 16.3189 3.20895 16.7241 3.58051C17.1293 3.95207 17.357 4.45597 17.3571 4.98143V13.3952C17.3564 13.9205 17.1285 14.424 16.7234 14.7955C16.3184 15.1669 15.7693 15.3759 15.1964 15.3766H10.2643L6.80357 18.4847C6.72785 18.5528 6.63178 18.5989 6.52751 18.6169C6.42325 18.635 6.31549 18.6243 6.21786 18.5862C6.12132 18.5484 6.03903 18.4854 5.98124 18.405C5.92346 18.3247 5.89272 18.2305 5.89286 18.1342V15.3766ZM4 6.99991C4 6.44762 4.44772 5.99991 5 5.99991H13C13.5523 5.99991 14 6.44762 14 6.99991C14 7.55219 13.5523 7.99991 13 7.99991H5C4.44772 7.99991 4 7.55219 4 6.99991ZM4 10.9999C4 10.4476 4.44772 9.99991 5 9.99991H10C10.5523 9.99991 11 10.4476 11 10.9999C11 11.5522 10.5523 11.9999 10 11.9999H5C4.44772 11.9999 4 11.5522 4 10.9999Z" />
            <path d="M15.1964 16.032H12V17.5484C12.0002 17.7353 12.0406 17.9203 12.1188 18.0929C12.197 18.2654 12.3115 18.4222 12.4557 18.5542C12.6 18.6862 12.7712 18.7908 12.9596 18.8621C13.1479 18.9334 13.3498 18.97 13.5536 18.9698H16.5536L18.6571 20.8628C18.7579 20.9515 18.8924 21.0009 19.0321 21.0003C19.1031 21.0014 19.1736 20.9891 19.2393 20.9643C19.3369 20.9265 19.4201 20.8632 19.4785 20.7822C19.537 20.7012 19.5681 20.6062 19.5679 20.5091V18.9698H20.4464C20.6502 18.97 20.8521 18.9334 21.0404 18.8621C21.2288 18.7908 21.4 18.6862 21.5443 18.5542C21.6885 18.4222 21.803 18.2654 21.8812 18.0929C21.9594 17.9203 21.9998 17.7353 22 17.5484V12.2886C21.999 11.9113 21.8348 11.5499 21.5436 11.2834C21.2524 11.0169 20.8578 10.8673 20.4464 10.8672H18.0714V13.3956C18.0707 14.0946 17.7676 14.7648 17.2286 15.2591C16.6896 15.7534 15.9587 16.0314 15.1964 16.032Z" />
        </svg>
    )
}

export default RequestIcon;