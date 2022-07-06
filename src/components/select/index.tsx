import React from "react";
import SelectType1 from "../select-type-1";
import SelectType2 from "../select-type-2";

export interface ISelectItem {
    label: string;
    value: any;
}

export interface ISelect extends React.HTMLProps<HTMLInputElement> {
    options?: Array<ISelectItem>;
    selectingOption?: ISelectItem;
    className?: string;
    inputClassName?: string;
    withLabel?: boolean;
}

interface ISelectGeneral extends ISelect {
    variant?: 'box' | 'line'
}

const Select = (props: ISelectGeneral) => {
    const {variant = 'box', ...rest} = props;

    if (variant === 'box') {
        return (
            <SelectType1 {...rest}/>
        )
    }
    return (
        <SelectType2 {...rest}/>
    )
}

export default Select;