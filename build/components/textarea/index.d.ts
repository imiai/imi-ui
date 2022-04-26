import React from "react";
import './styles.scss';
interface ITextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
    isError?: Boolean;
    label?: string;
    hint?: string;
    error?: string;
    showLengthCounter?: Boolean;
}
declare const TextArea: (props: ITextAreaProps) => JSX.Element;
export default TextArea;
