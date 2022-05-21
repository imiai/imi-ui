import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { useClickAnyWhere, useOnClickOutside } from "../../hooks";
import { MoreT2Icon } from "../../icons"
import Card from "../card"
import './styles.scss';

interface IMenu {
    children: React.ReactNode;
}

interface IMenuItem extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Menu = (props: IMenu) => {
    const { children } = props;
    const [displayStyle, setDisplayStyle] = useState('none');
    const ref = useRef(null)

    useOnClickOutside(ref, () => setDisplayStyle('none'))

    return (
        <div className="imiui-button-menu" ref={ref}>
            <button className="button" onClick={() => {setDisplayStyle(displayStyle === 'block' ? 'none' : 'block')}}>
                <MoreT2Icon fill="var(--imiui-gray-300)" width={16} height={16} />
            </button>
            <Card id='menu-list-id' variant='dialogue' className="menu-list" style={{display: displayStyle}}>
                {children}
            </Card>
        </div>
    )
}

export const MenuItem = (props: IMenuItem) => {
    const { children, className, onClick = () => {}, ...rest } = props;

    const onItemClick = (e: any) => {
        onClick(e)
        let el = document.getElementById('menu-list-id')
        el.style.display = 'none'
    }

    return (
        <button className={`imiui-menu-item${className ? ` ${className}` : ''}`} {...rest} onClick={onItemClick}>
            {children}
        </button>
    )
}

export default Menu;