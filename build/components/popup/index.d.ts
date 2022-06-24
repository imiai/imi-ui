import React from "react";
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
export declare const Header: (props: IPopupHeader) => JSX.Element;
declare const Popup: (props: IPopupProps) => React.ReactPortal;
export default Popup;
