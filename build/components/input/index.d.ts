import React from "react";
import './styles.scss';
interface ISelectItem {
    label: string;
    value: any;
}
interface IInputProps extends React.HTMLProps<HTMLInputElement> {
    onClear?: Function;
    endIcon?: React.ReactNode;
    onEndIconClick?: Function;
    isError?: Boolean;
    withLabel?: Boolean;
    hint?: string;
    error?: string;
    options?: Array<ISelectItem>;
}
declare const Input: (props: IInputProps) => JSX.Element;
export default Input;
