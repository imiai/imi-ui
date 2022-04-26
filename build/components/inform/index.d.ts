import React from "react";
import './styles.scss';
interface IInformProps extends React.HTMLAttributes<HTMLDivElement> {
    severity: 'success' | 'info' | 'warning' | 'error';
    content: string;
    icon?: React.ReactNode;
    closeable?: Boolean;
}
declare const Inform: (props: IInformProps) => JSX.Element;
export default Inform;
