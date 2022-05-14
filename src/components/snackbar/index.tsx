import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CheckIcon, CloseIcon, CloseT2Icon, InfoIcon, WarningIcon } from "../../icons";
import './styles.scss';

interface ISnackbarProps {
    content?: string;
    autoHideDuration?: number;
    onClose?: Function;
    open?: Boolean;
    type?: string;
    showCloseButton?: Boolean;
}

const SnackbarJsx = (props: ISnackbarProps) => {
    const { showCloseButton = false, content, autoHideDuration = 6000, onClose, open, type = 'info' } = props;
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
        <div className={`imiui-snackbar ${type} ${openSnackbar ? 'show' : ''}`}>
            {type === 'info' && <InfoIcon fill="var(--imiui-primary-white)" />}
            {type === 'success' && <CheckIcon fill="var(--imiui-primary-white)"/>}
            {type === 'warning' && <WarningIcon fill="var(--imiui-primary-white)"/>}
            {type === 'error' && <CloseT2Icon fill="var(--imiui-primary-white)"/>}
            <span className="message t-label-regular-tiny ml-4">{content}</span>
            {showCloseButton && <button onClick={() => onClose()} className={'close-button'}>
                <CloseIcon fill="var(--imiui-primary-white)"/>
            </button>}
        </div>
    )
}


const Snackbar = (props: ISnackbarProps) => {
    return ReactDOM.createPortal(<SnackbarJsx {...props} />, document.querySelector('body'))
}

export default Snackbar;