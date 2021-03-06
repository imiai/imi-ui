import React, { Children, useEffect, useLayoutEffect, useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
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

const Tabs = (props: ITabsProps) => {
    const { headers = [], className = '', children } = props;
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [tabItemWidths, setTabItemWidths] = useState([]);
    const [activeLineWidth, setActiveLineWidth] = useState(0);
    const [activeLineLeft, setActiveLineLeft] = useState(0);
    const isMobile = useMediaQuery('(max-width: 768px)')

    useLayoutEffect(() => {
        let itemWidths = [];
        for (let i = 0; i < headers.length; i++) {
            let id = `imiui-tab-${i}`;
            let elWidth = document.getElementById(id)?.clientWidth || 0;
            itemWidths.push(elWidth);
        }
        setTabItemWidths(itemWidths);
    }, [headers.length])

    useEffect(() => {
        setActiveLineWidth(tabItemWidths[currentTabIndex]);
        let left = 0;
        let gap = isMobile ? 16 : 24;
        for (let i = 0; i < currentTabIndex; i++) {
            left = left + gap + tabItemWidths[i]
        }
        setActiveLineLeft(left)
    }, [isMobile, currentTabIndex, tabItemWidths])

    return (
        <div className={`imiui-tabs ${className}`}>
            <div className='imiui-tabs__header'>
                {headers.map((header, index) => {
                    return (
                        <button key={index} id={`imiui-tab-${index}`} className={`item${currentTabIndex === index ? ' active' : ''}`} onClick={() => setCurrentTabIndex(index)}>
                            <span className='t-label-semibold-supertiny'>{header.title}</span>
                            {header.count !== undefined && <div className='count t-label-semibold-supertiny c-gray-300'>{header.count}</div>}
                        </button>
                    )
                })}
                <div style={{ left: `${activeLineLeft}px`, width: activeLineWidth }} className="active-line" />
            </div>
            {children && Children.count(children) > 0 ? children[currentTabIndex] : <></>}
        </div>
    )
}

export const TabItem = (props: ITabItem) => {
    const { title, active, onClick } = props;
    return (
        <button className={`imiui-tabs__item${active ? ' active' : ' inactive'}`} onClick={onClick}>
            <span className='t-label-bold-small'>{title}</span>
        </button>
    )
}

export default Tabs;