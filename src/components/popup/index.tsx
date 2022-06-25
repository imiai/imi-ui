import Button from "../../components/button/button";
import Image from "../../components/image";
import { CloseIcon, CloseT2Icon } from "../../icons";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import './styles.scss';

interface IPopupProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    subTitle?: string;
    image?: string;
    imageSize: 'large' | 'small' | 'none';
    mainButton?: string;
    onMainButtonClick?: React.MouseEventHandler;
    subButton?: string;
    onSubButtonClick?: React.MouseEventHandler;
    open: Boolean;
    onClose?: React.MouseEventHandler;
    clickOutsideToClose?: Boolean;
}

interface IPopupHeader {
    title: string;
    onClose: React.MouseEventHandler;
}

interface IPopupBody {
    children: React.ReactNode;
}

export const PopupHeader = (props: IPopupHeader) => {
    const { title, onClose } = props;
    return (
        <div className='imi-popup-header'>
            <span className='t-heading-bold-small'>{title}</span>
            <button onClick={onClose}><CloseIcon width={24} height={24} fill='var(--imiui-primary-dark)' /></button>
        </div>
    )
}

export const PopupBody = (props: IPopupBody) => {
    const { children } = props;
    return (
        <div className='imi-popup-body'>
            {children}
        </div>
    )
}


const PopupJsx = (props: IPopupProps) => {
    const { open = false, clickOutsideToClose = true, onClose = () => {}, title, subTitle, image, imageSize, mainButton, onMainButtonClick = () => {}, subButton, onSubButtonClick = () => {}, children, className, ...rest } = props;
    const [openPopup, setOpenPopup] = useState<Boolean>(open);
    const [showContent, setShowContent] = useState<Boolean>(false);

    useEffect(() => {
        setOpenPopup(open);
        let id = setTimeout(() => setShowContent(open), 50)
        return () => clearTimeout(id)
    }, [open])

    useEffect(() => {
        if (openPopup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [openPopup])

    
    if (!openPopup) {
        return (
            <></>
        )
    }

    return (
        <div id='imiui-popup-wrapper' {...rest} className={`imiui-popup${className ? ` ${className}` : ''}`}>
            <div className={`content${children ? '' : ` ${imageSize}`}${showContent ? ` popup-with-anim` : ''} `}>
                {children ?
                    children
                :
                    <>
                        <button className="close" onClick={onClose}>{imageSize === 'large' ? <CloseT2Icon /> : <CloseIcon /> }</button>
                        {imageSize === 'large' && <Image alt='popup-img' src={image} className={`image`} />}
                        <div className="wrapper">
                            {imageSize === 'small' && <Image alt='popup-img' src={image} className={`image`} />}
                            <span className="title t-label-bold-small">{title}</span>
                            <span className="sub-title t-label-regular-tiny">{subTitle}</span>
                            <div className={`button-container`}>
                                <Button type='primary' size={40} className='main-button' onClick={onMainButtonClick}>{mainButton}</Button>
                                {subButton && <Button type={imageSize !== 'none' ? 'tertiary' : 'secondary'} size={40} className='sub-button' onClick={onSubButtonClick}>{subButton}</Button>}
                            </div>
                        </div>
                    </>
                }
            </div>
            {open && <div className="overlay" onClick={clickOutsideToClose ? onClose : () => {}}/>}
        </div>
    )
}

const Popup = (props: IPopupProps) => {
    return ReactDOM.createPortal(<PopupJsx {...props}/>, document.querySelector('body'))
}

export default Popup;