import { CloseIcon } from "../../icons";
import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import './styles.scss';
import { useResizeObserver } from "../../hooks";

interface IBottomSheetProps {
    title?: string;
    headrLeftIcon?: React.ReactNode;
    onIconClick?: Function;
    onClose?: Function;
    open: Boolean;
    clickOutsideToClose?: Boolean;
    children?: React.ReactNode;
    className?: string;
}

const BottomSheetJsx = (props: IBottomSheetProps) => {
    const { title, open = false, headrLeftIcon, clickOutsideToClose = false, onClose = () => { }, onIconClick = () => { }, children, className } = props;
    const [isStartDragging, setIsStartDragging] = useState(false);
    const [positionTop, setPositionTop] = useState(`${window.innerHeight + 12}px`);
    const [initTop, setInitTop] = useState(`${window.innerHeight + 12}px`);
    const [opacity, setOpacity] = useState(0);
    const [openSheet, setOpenSheet] = useState(open);

    const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();

    useEffect(() => {
        let id = setTimeout(() => {
            setOpenSheet(open)
        }, 50)
        return () => clearTimeout(id)
    }, [open])

    useEffect(() => {
        if (openSheet) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [openSheet])

    useEffect(() => {
        let el = document.getElementById('imiui-bottomsheet-container')
        let headerHeight = title ? 48 : 40;
        let contentHeight = height;
        let bottomSheetHeight = headerHeight + contentHeight;
        let maxTop = window.innerHeight * 0.1 - headerHeight;
        if (el && openSheet) {
            if (window.innerHeight - bottomSheetHeight > maxTop) {
                setPositionTop(`${window.innerHeight - bottomSheetHeight}px`)
                setInitTop(`${window.innerHeight - bottomSheetHeight}px`)
            } else {
                setPositionTop(`${maxTop}px`);
                setInitTop(`${maxTop}px`);
            }
        }
        setOpacity(0.7)
    }, [title, openSheet, height])

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
        <div id='imiui-bottom-sheet-wrapper' className={`imiui-bottomsheet${className ? ` ${className}` : ''}`}>
            <div className={`overlay`} style={{ opacity: opacity }} onClick={clickOutsideToClose ? onCloseSheet : () => { }}></div>
            <div id='imiui-bottomsheet-container' className="container" style={{ top: positionTop }}>
                <div className="header" style={title ? { height: 48 } : {}} onTouchStart={startDrag} onMouseDown={startDrag}>
                    <div className="indicator" />
                    <button className="icon" onClick={() => onIconClick()}>
                        {headrLeftIcon}
                    </button>
                    <span className="title t-label-bold-small">{title}</span>
                    <button className="close" onClick={onCloseSheet}>
                        <CloseIcon />
                    </button>
                </div>
                <div ref={ref} className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}

const BottomSheet = (props: IBottomSheetProps) => {
    return ReactDOM.createPortal(<BottomSheetJsx {...props} />, document.querySelector('body'))
}

export default BottomSheet;