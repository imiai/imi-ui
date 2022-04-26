import React from 'react';
import { IIconsProps } from './icons.types';

const AddT2Icon = (props: IIconsProps) => {
    const { fill = '#7790A6', className = '', width = 24, height = 24 } = props;
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.0004 11C17.5527 11 18.0004 11.4477 18.0004 12C18.0004 12.5523 17.5527 13 17.0004 13H13.0004V17C13.0004 17.5523 12.5527 18 12.0004 18C11.4481 18 11.0004 17.5523 11.0004 17V13H7.00038C6.44809 13 6.00038 12.5523 6.00038 12C6.00038 11.4477 6.44809 11 7.00038 11H11.0004V7.00001C11.0004 6.44773 11.4481 6.00001 12.0004 6.00001C12.5527 6.00001 13.0004 6.44773 13.0004 7.00001V11H17.0004Z" />
        </svg>
    )
}

export default AddT2Icon;