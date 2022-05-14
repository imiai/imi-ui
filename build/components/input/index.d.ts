import React from "react";
import './styles.scss';
interface IInputProps extends React.HTMLProps<HTMLInputElement> {
    onClear?: Function;
    endIcon?: React.ReactNode;
    onEndIconClick?: Function;
    isError?: Boolean;
    withLabel?: Boolean;
    hint?: string;
    error?: string;
    options?: Array<any>;
    renderOption?: Function;
}
declare const Input: (props: IInputProps) => JSX.Element;
export default Input;
