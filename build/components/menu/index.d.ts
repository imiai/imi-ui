import React from "react";
import './styles.scss';
interface IMenu {
    children: React.ReactNode;
}
interface IMenuItem extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
declare const Menu: (props: IMenu) => JSX.Element;
export declare const MenuItem: (props: IMenuItem) => JSX.Element;
export default Menu;
