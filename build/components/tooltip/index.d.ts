import React from "react";
import './styles.scss';
interface ITooltipProps {
    title: string;
    placement?: 'top' | 'left' | 'right';
    children: React.ReactNode;
}
declare const Tooltip: (props: ITooltipProps) => JSX.Element;
export default Tooltip;
