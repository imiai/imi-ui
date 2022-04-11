import { CloseT2 } from "icons";
import React, { Fragment } from "react";
import './styles.scss';

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
    onClear?: Function;
    endIcon?: React.ReactNode;
    onEndIconClick?: Function;
    isError?: Boolean;
    withLabel?: Boolean;
    hint?: string;
    error?: string;
}

const Input = (props: IInputProps) => {
    const { placeholder = '', withLabel = false, hint = '', error = '', isError = false, onClear, endIcon, onEndIconClick, ...rest } = props;

    const getInputWidth = () => {
        let minus = 32;
        if (onClear && endIcon) {
            minus += 60 + 16;
            return minus;
        }
        if (onClear || endIcon) {
            minus += 20 + 16;
            return minus;
        }
    }

    return (
        <Fragment>
            <div className={`imiui-input${isError ? ' error' : ''}${rest.disabled ? ' disabled' : ''}${withLabel ? ' label' : ''}`}>
                <input {...rest} placeholder={placeholder} style={{ width: `calc(100% - ${getInputWidth()}px` }} />
                {withLabel && <label>{placeholder}</label>}
                <div className="icon-container">
                    {onClear && !rest.disabled &&
                        <button className="icon close">
                            <CloseT2 />
                        </button>}
                    {onClear && endIcon && <hr />}
                    {endIcon &&
                        <button className="icon" onClick={onEndIconClick ? onEndIconClick() : () => { }}>
                            {endIcon}
                        </button>
                    }
                </div>
            </div>
            {!error && hint && <p className="imiui-input-note hint">{hint}</p>}
            {error && <p className="imiui-input-note error">{error}</p>}
        </Fragment>
    )
}

export default Input;