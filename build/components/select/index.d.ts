import React from "react";
import './styles.scss';
interface ISelectItem {
    label: string;
    value: any;
}
interface ISelect extends React.HTMLProps<HTMLInputElement> {
    options?: Array<ISelectItem>;
    renderOption?: Function;
}
declare const Select: (props: ISelect) => JSX.Element;
export default Select;
