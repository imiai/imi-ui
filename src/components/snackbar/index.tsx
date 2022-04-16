import React, { useCallback, useEffect, useState } from "react";
import './styles.scss';

interface AnchorOriginProps {
    vertical: 'bottom' | 'top';
    horizontal: 'center' | 'left' | 'right';
}

interface ISnackbarProps {
    icon?: React.ReactNode;
    title?: string;
    titleClassName?: string;
    content?: string;
    autoHideDuration?: number;
    onClose?: Function;
    anchorOrigin?: AnchorOriginProps;
    open?: Boolean;
}

const Snackbar = (props: ISnackbarProps) => {
    const { titleClassName = '', icon, title, content, autoHideDuration = 6000, onClose, open, anchorOrigin = { horizontal: 'center', vertical: 'top' } } = props;
    const [openSnackbar, setOpenSnackbar] = useState(open);

    useEffect(() => {
        let id = setTimeout(() => {
            setOpenSnackbar(open)
        }, 50)
        return () => clearTimeout(id)
    }, [open])

    const onCloseSnackbar = useCallback(() => {
        setOpenSnackbar(false);
        let timer = setTimeout(() => {
            onClose && onClose();
            clearTimeout(timer);
        }, 200)
    }, [onClose]);

    const setAutoHideTimer = useCallback((autoHideDuration: number) => {
        if (!onClose) {
            return;
        }
        let timer = setTimeout(() => {
            onCloseSnackbar();
            clearTimeout(timer);
        }, autoHideDuration)
    }, [onClose, onCloseSnackbar]);

    useEffect(() => {
        if (open && autoHideDuration) {
            setAutoHideTimer(autoHideDuration)
        }
    }, [open, autoHideDuration, setAutoHideTimer])

    if (!open) {
        return <></>
    }

    return (
        <div className={`imiui-snackbar ${anchorOrigin.horizontal} ${openSnackbar ? 'show' : ''} ${anchorOrigin.vertical}`}>
            {icon}
            <p className="message t-label-regular-tiny"><span className={`title ${titleClassName}`}>{title}</span> <span>{content}</span></p>
        </div>
    )
}

export default Snackbar;