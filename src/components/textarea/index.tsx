import React, { Fragment } from "react";
import './styles.scss';

interface ITextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
    isError?: Boolean;
    label?: string;
    hint?: string;
    error?: string;
    showLengthCounter?: Boolean;
}

const TextArea = (props: ITextAreaProps) => {
    const { showLengthCounter = false, maxLength = 320, label = '', placeholder = '', hint = '', error = '', isError = false, ...rest } = props;

    const handleKeyDown = (e: any) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${Math.min(e.target.scrollHeight, 72)}px`
        rest.onChange && rest.onChange(e);
    }

    return (
        <Fragment>
            <div className={`imiui-textarea${isError ? ' error' : ''}${rest.disabled ? ' disabled' : ''}${label ? ' label' : ''}`}>
                <textarea {...rest} maxLength={maxLength} placeholder={placeholder} onChange={handleKeyDown}/>
                {label && <label>{label}</label>}
                {showLengthCounter && <span className="length-counter">{rest.value ? rest.value.toString().length : 0}/{maxLength}</span>}
            </div>
            {!error && hint && <p className="imiui-textarea-note hint">{hint}</p>}
            {error && <p className="imiui-textarea-note error">{error}</p>}
        </Fragment>
    )
}

export default TextArea;