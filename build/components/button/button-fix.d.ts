import React from "react";
import './styles.scss';
interface IButtonFixProps extends React.HTMLProps<HTMLButtonElement> {
    type: 'primary' | 'secondary' | 'tertiary';
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    children?: React.ReactNode;
}
declare const ButtonFix: (props: IButtonFixProps) => JSX.Element;
export default ButtonFix;
