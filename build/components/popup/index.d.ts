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
interface IPopupBody {
    children: React.ReactNode;
    className?: string;
}
export declare const PopupHeader: (props: IPopupHeader) => JSX.Element;
export declare const PopupBody: (props: IPopupBody) => JSX.Element;
declare const Popup: (props: IPopupProps) => React.ReactPortal;
export default Popup;
