import React from "react";
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
declare const BottomSheet: (props: IBottomSheetProps) => JSX.Element;
export default BottomSheet;
