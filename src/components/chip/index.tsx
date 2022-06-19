import React from "react";
import { CloseIcon } from "../../icons";
import './styles.scss';

interface IChip extends React.HTMLProps<HTMLButtonElement> {
    content: string;
    size: 32 | 40;
    isSelected: boolean;
    onClose?: Function;
    iconLeft?: React.ReactNode;
    type?: "button" | "submit" | "reset";
    textClassName?: string;
}

const Chip = (props: IChip) => {
    const { size = 32, content, isSelected = false, onClose, iconLeft, className, textClassName = 't-body-regular-small', ...rest } = props;

    if (onClose) {
        return (
            <div className={`imiui-chip size_${size} ${isSelected ? 'selected' : 'unselected'} ${className}`}>
                {iconLeft ? <div className="left-icon">{iconLeft}</div> : <></>}
                <p className={textClassName}>{content}</p>
                {onClose &&
                    <button className="close-icon">
                        <CloseIcon width={16} height={16} fill={`${isSelected ? 'var(--imiui-primary-blue)' : 'var(--imiui-primary-dark)'}`} />
                    </button>
                }
            </div>
        )
    }
    return (
        <button style={{cursor: 'pointer'}} className={`imiui-chip size_${size} ${isSelected ? 'selected' : 'unselected'} ${className}`} {...rest}>
            {iconLeft ? <div className="left-icon">{iconLeft}</div> : <></>}
            <p className={textClassName}>{content}</p>
        </button>
    )
}

export default Chip