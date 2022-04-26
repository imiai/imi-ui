import React from "react";
import './styles.scss';
interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    type: 'primary' | 'secondary' | 'tertiary';
    size: 54 | 48 | 40 | 32;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    children?: React.ReactNode;
}
export declare const Button: (props: IButtonProps) => JSX.Element;
export default Button;
