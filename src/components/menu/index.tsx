import React, { useRef, useState } from "react"
import { useOnClickOutside } from "../../hooks";
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
    const [showItem, setShowItem] = useState(false);
    const ref = useRef(null)

    useOnClickOutside(ref, () => setShowItem(false))

    return (
        <div className="imiui-button-menu" ref={ref}>
            <button className="button" onClick={() => {setShowItem(!showItem)}}>
                <MoreT2Icon fill="var(--imiui-gray-300)" width={16} height={16} />
            </button>
            {showItem &&
                <Card variant='dialogue' className="menu-list">
                    {children}
                </Card>
            }
        </div>
    )
}

export const MenuItem = (props: IMenuItem) => {
    const { children, className, ...rest } = props;
    return (
        <button className={`imiui-menu-item${className ? ` ${className}` : ''}`} {...rest}>
            {children}
        </button>
    )
}

export default Menu;