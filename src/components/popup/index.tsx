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
    onMainButtonClick?: Function;
    subButton?: string;
    onSubButtonClick?: Function;
    open: Boolean;
    onClose?: React.MouseEventHandler;
    clickOutsideToClose?: Boolean;
}

const PopupJsx = (props: IPopupProps) => {
    const { open = false, clickOutsideToClose = true, onClose = () => {}, title, subTitle, image, imageSize, mainButton, onMainButtonClick, subButton, onSubButtonClick, children, className, ...rest } = props;
    const [openPopup, setOpenPopup] = useState<Boolean>(open);
    const [showContent, setShowContent] = useState<Boolean>(false);

    useEffect(() => {
        setOpenPopup(open);
        let id = setTimeout(() => setShowContent(open), 50)
        return () => clearTimeout(id)
    }, [open])
    
  
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
                                <Button type='primary' size={40} className='main-button' onClick={() => onMainButtonClick()}>{mainButton}</Button>
                                {subButton && <Button type={imageSize !== 'none' ? 'tertiary' : 'secondary'} size={40} className='sub-button' onClick={() => onSubButtonClick()}>{subButton}</Button>}
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