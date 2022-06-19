import React from "react";
import './styles.scss';
interface IChip extends React.HTMLProps<HTMLButtonElement> {
    content: string;
    size: 32 | 40;
    isSelected: boolean;
    onClose?: Function;
    iconLeft?: React.ReactNode;
    type?: "button" | "submit" | "reset";
}
declare const Chip: (props: IChip) => JSX.Element;
export default Chip;
