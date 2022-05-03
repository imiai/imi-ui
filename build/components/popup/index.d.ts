import React from "react";
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
declare const Popup: (props: IPopupProps) => React.ReactPortal;
export default Popup;
