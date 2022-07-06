import React from "react";
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
    variant?: 'box' | 'line';
}
declare const Select: (props: ISelectGeneral) => JSX.Element;
export default Select;
