import React from "react";
import './styles.scss';

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    type: 'primary' | 'secondary' | 'tertiary';
    size: 54 | 48 | 40 | 32;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    children?: React.ReactNode;
}

export const Button = (props: IButtonProps) => {

    const { className = '', href = '', target = '_blank', type, size, disabled = false, startIcon, endIcon, children, ...rest } = props;

    let content = (
        <>
            {startIcon ? <span className="start-icon">{startIcon}</span> : undefined}
            {children}
            {endIcon ? <span className="end-icon">{endIcon}</span> : undefined}
        </>
    )

    if (href && !disabled) {
        return (
            <a href={href} target={target} className={`imiui-button ${type} size-${size}${disabled ? ' disabled' : ''}${className ? ` ${className}` : ''}`}>
                {content}
            </a>
        )
    }

    return (
        <button disabled={disabled} className={`imiui-button ${type} size-${size}${disabled ? ' disabled' : ''}${className ? ` ${className}` : ''}`} {...rest}>
           {content}
        </button>
    )
}

export default Button;