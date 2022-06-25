import React from "react";
import './styles.scss';
interface ICheckboxProps extends React.HTMLProps<HTMLInputElement> {
    labelClassName?: string;
}
declare const Checkbox: (props: ICheckboxProps) => JSX.Element;
export default Checkbox;
