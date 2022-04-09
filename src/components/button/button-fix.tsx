import React from "react";
import './styles.scss';

interface IButtonFixProps extends React.HTMLProps<HTMLButtonElement> {
    type: 'primary' | 'secondary' | 'tertiary';
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    children?: React.ReactNode;
}

const ButtonFix = (props: IButtonFixProps) => {
    const { type, href = '', target = '_blank', disabled = false, startIcon, endIcon, children, className = '', ...rest } = props;
    const content = (
        <>
            {startIcon ? <span className="start-icon">{startIcon}</span> : undefined}
            {children}
            {endIcon ? <span className="end-icon">{endIcon}</span> : undefined}
        </>
    )

    if (href && !disabled) {
        return (
            <div className="imiui-button-fix">
                <a href={href} target={target} className={`imiui-button ${type}${disabled ? ' disabled' : ''}${className ? ` ${className}` : ''}`}>
                    {content}
                </a>
            </div>
        )
    }

    return (
        <div className="imiui-button-fix">
            <button disabled={disabled} className={`imiui-button ${type}${disabled ? ' disabled' : ''}${className ? ` ${className}` : ''}`} {...rest}>
                {content}
            </button>
        </div>
    )
}

export default ButtonFix;