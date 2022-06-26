import React from 'react';
import './styles.scss';
interface ITabHeaderProps {
    title: string;
    count: number | undefined;
}
interface ITabsProps {
    headers: Array<ITabHeaderProps>;
    className: string;
    children: React.ReactNode;
}
interface ITabItem {
    title: string;
    onClick?: React.MouseEventHandler;
    active: boolean;
}
declare const Tabs: (props: ITabsProps) => JSX.Element;
export declare const TabItem: (props: ITabItem) => JSX.Element;
export default Tabs;
