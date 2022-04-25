import Button from "components/button/button";
import Image from "components/image";
import { CloseIcon, CloseT2Icon } from "icons";
import React, { useEffect, useState } from "react";
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

const Popup = (props: IPopupProps) => {
    const { open = false, clickOutsideToClose = true, onClose = () => {}, title, subTitle, image, imageSize, mainButton, onMainButtonClick, subButton, onSubButtonClick, ...rest } = props;
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
        <div {...rest} className='imiui-popup'>
            <div className={`content ${imageSize} ${showContent ? ` popup-with-anim` : ''} `}>
                <button className="close" onClick={onClose}>{imageSize === 'large' ? <CloseT2Icon /> : <CloseIcon /> }</button>
                {imageSize === 'large' && <Image alt='popup-img' src={image} className={`image`} />}
                <div className="wrapper">
                    {imageSize === 'small' && <Image alt='popup-img' src={image} className={`image`} />}
                    <span className="title t-label-bold-small">{title}</span>
                    <span className="sub-title t-label-regular-tiny">{subTitle}</span>
                    <div className={`button-container`}>
                        <Button type='primary' size={40} className='main-button'>Main button</Button>
                        <Button type={imageSize !== 'none' ? 'tertiary' : 'secondary'} size={40} className='sub-button'>Sub button</Button>
                    </div>
                </div>
            </div>
            {open && <div className="overlay" onClick={clickOutsideToClose ? onClose : () => {}}/>}
        </div>
    )
}

export default Popup;