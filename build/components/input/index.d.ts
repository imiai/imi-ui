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
}
declare const Input: (props: IInputProps) => JSX.Element;
export default Input;
