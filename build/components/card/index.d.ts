import React from "react";
import './styles.scss';
interface ICardProps extends React.HTMLProps<HTMLDivElement> {
    children?: React.ReactNode;
    variant?: 'navi' | 'card' | 'dialogue';
}
declare const Card: (props: ICardProps) => JSX.Element;
export default Card;
