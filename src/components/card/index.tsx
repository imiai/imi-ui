import React, { forwardRef } from "react";
import './styles.scss';

interface ICardProps extends React.HTMLProps<HTMLDivElement> {
    children?: React.ReactNode;
    variant?: 'navi' | 'card' | 'dialogue';
}

const Card = forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
    const { variant = 'card', children, ...rest } = props;
    return (
        <div {...rest} ref={ref} className={`imiui-card ${variant} ${rest.className}`}>
            {children}
        </div>
    )
})

export default Card;