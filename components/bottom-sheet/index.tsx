import { CloseIcon } from "../../icons";
import React, { useState, useEffect, useCallback } from "react";
import './styles.scss';

interface IBottomSheetProps {
    title?: string;
    headrLeftIcon?: React.ReactNode;
    onIconClick?: Function;
    onClose?: Function;
    open: Boolean;
    clickOutsideToClose?: Boolean;
    children?: React.ReactNode;
}

const BottomSheet = (props: IBottomSheetProps) => {
    const { title, open = false, headrLeftIcon, clickOutsideToClose = false, onClose = () => { }, onIconClick = () => { }, children } = props;
    const [isStartDragging, setIsStartDragging] = useState(false);
    const [positionTop, setPositionTop] = useState(`${window.innerHeight + 12}px`);
    const [initTop, setInitTop] = useState(`${window.innerHeight + 12}px`);
    const [opacity, setOpacity] = useState(0);
    const [openSheet, setOpenSheet] = useState(open);

    useEffect(() => {
        let id = setTimeout(() => {
            setOpenSheet(open)
        }, 50)
        return () => clearTimeout(id)
    }, [open])

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {document.body.style.overflow = 'unset';}
    }, [])

    useEffect(() => {
        let el = document.getElementById('imiui-bottomsheet-container')
        if (el && openSheet) {
            setPositionTop(`${window.innerHeight - el.scrollHeight}px`)
            setInitTop(`${window.innerHeight - el.scrollHeight}px`)
        }
        setOpacity(0.7)
    }, [openSheet])

    const onCloseSheet = useCallback(() => {
        setPositionTop(`${window.innerHeight + 12}px`);
        setOpacity(0);
        let timer = setTimeout(() => {
            setOpenSheet(false);
            clearTimeout(timer);
            onClose();
        }, 100)
    }, [onClose]);

    const startDrag = () => {
        setIsStartDragging(true);
    }

    const stopStartDrag = useCallback((event: any) => {
        let yPos = event.clientY;
        if (event.type === 'touchstart' || event.type === 'touchmove' || event.type === 'touchend' || event.type === 'touchcancel') {
            let touch = event.touches[0] || event.changedTouches[0];
            yPos = touch.pageY;
        }
        if ((window.innerHeight - yPos) < 100) {
            setPositionTop(`${window.innerHeight + 12}px`)
            onCloseSheet();
        } else {
            setPositionTop(initTop)
        }
        setIsStartDragging(false);
    }, [initTop, onCloseSheet])

    const doStartDrag = useCallback((event: any) => {
        if (!isStartDragging) {
            return;
        }
        let yPos = event.clientY;
        if (event.type === 'touchstart' || event.type === 'touchmove' || event.type === 'touchend' || event.type === 'touchcancel') {
            let touch = event.touches[0] || event.changedTouches[0];
            yPos = touch.pageY;
        }
        if (yPos < parseInt(initTop.slice(0, -2))) {
            return;
        }
        setPositionTop(`${yPos}px`)
    }, [initTop, isStartDragging]);


    useEffect(() => {
        if (isStartDragging) {
            document.documentElement.addEventListener('mousemove', doStartDrag);
            document.documentElement.addEventListener('mouseup', stopStartDrag);
            document.documentElement.addEventListener('touchmove', doStartDrag);
            document.documentElement.addEventListener('touchend', stopStartDrag);
        }
        return () => {
            if (isStartDragging) {
                document.documentElement.removeEventListener('mousemove', doStartDrag);
                document.documentElement.removeEventListener('mouseup', stopStartDrag);
                document.documentElement.removeEventListener('touchmove', doStartDrag);
                document.documentElement.removeEventListener('touchend', stopStartDrag);
            }
        }
    }, [isStartDragging, doStartDrag, stopStartDrag]);

    if (!openSheet) {
        return <></>
    }

    return (
        <div className="imiui-bottomsheet">
            <div className={`overlay`} style={{opacity: opacity}} onClick={clickOutsideToClose ? onCloseSheet : () => {}}></div>
            <div id='imiui-bottomsheet-container' className="container" onTouchStart={startDrag} onMouseDown={startDrag} style={{ top: positionTop }}>
                <div className="header" style={title ? {height: 44} : {}}>
                    <div className="indicator" />
                    <button className="icon" onClick={() => onIconClick()}>
                        {headrLeftIcon}
                    </button>
                    <span className="title t-label-bold-small">{title}</span>
                    <button className="close" onClick={onCloseSheet}>
                        <CloseIcon />
                    </button>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BottomSheet;