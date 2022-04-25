import React from "react";
import './styles.scss';

interface ICardProps extends React.HTMLProps<HTMLDivElement> {
    children?: React.ReactNode;
    variant?: 'navi' | 'card' | 'dialogue';
}

const Card = (props: ICardProps) => {
    const { variant = 'card', children, ...rest } = props;
    return (
        <div {...rest} className={`imiui-card ${variant} ${rest.className}`}>
            {children}
        </div>
    )
}

export default Card;