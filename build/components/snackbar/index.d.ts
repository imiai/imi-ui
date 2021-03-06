import React from "react";
import './styles.scss';
interface ISnackbarProps {
    content?: string;
    autoHideDuration?: number;
    onClose?: Function;
    open?: Boolean;
    type?: string;
    showCloseButton?: Boolean;
}
declare const Snackbar: (props: ISnackbarProps) => React.ReactPortal;
export default Snackbar;
