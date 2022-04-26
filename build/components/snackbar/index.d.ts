import React from "react";
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
declare const Snackbar: (props: ISnackbarProps) => JSX.Element;
export default Snackbar;
