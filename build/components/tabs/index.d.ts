import React from 'react';
import './styles.scss';
interface ITabHeaderProps {
    title: string;
    count?: number;
}
interface ITabsProps {
    headers: Array<ITabHeaderProps>;
    className: string;
    children: React.ReactNode;
}
declare const Tabs: (props: ITabsProps) => JSX.Element;
export default Tabs;
