import { CloseT2Icon } from "../../icons";
import React, { Fragment } from "react";
import './styles.scss';
import Card from "../card";

interface ISelectItem {
    label: string;
    value: any;
}

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
    onClear?: Function;
    endIcon?: React.ReactNode;
    onEndIconClick?: Function;
    isError?: Boolean;
    withLabel?: Boolean;
    hint?: string;
    error?: string;
    options?: Array<ISelectItem>;
}

const Input = (props: IInputProps) => {
    const { options = [], placeholder = '', className, withLabel = false, hint = '', error = '', isError = false, onClear, endIcon, onEndIconClick, ...rest } = props;
    const [focused, setFocused] = React.useState(false)

    const onFocus = () => setFocused(true)
    const onBlur = () => {
        let timer = setTimeout(() => {
            setFocused(false);
            clearTimeout(timer);
        }, 100)
    }

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

    const onInputChange = (event: any, option: any) => {
        if (option) {
            event.target.value = option.value;
            rest.onChange(event)
        } else {
            rest.onChange(event)
        }
    }

    return (
        <Fragment>
            <div className={`imiui-input${isError ? ' error' : ''}${rest.disabled ? ' disabled' : ''}${withLabel ? ' label' : ''}`}>
                <input {...rest} onFocus={onFocus} onBlur={onBlur} onChange={(event) => onInputChange(event, null) } className={`t-label-regular-tiny${className ? ` ${className}` : ''}`} placeholder={placeholder} style={{ width: `calc(100% - ${getInputWidth()}px` }} />
                {withLabel && <label>{placeholder}</label>}
                <div className="icon-container">
                    {onClear && !rest.disabled &&
                        <button className="icon close">
                            <CloseT2Icon />
                        </button>}
                    {onClear && endIcon && <hr />}
                    {endIcon &&
                        <button className="icon" onClick={onEndIconClick ? () => onEndIconClick() : () => { }}>
                            {endIcon}
                        </button>
                    }
                </div>
                {focused && <Card className="autocomplete-options" variant='dialogue'>
                    {options.map((option, index) => {
                        return (
                            <button key={index} onClick={(event) => onInputChange(event, option)} className={'t-label-regular-tiny'}>
                               <div>{option.label}</div>
                            </button>
                        )
                    })}
                </Card>}
            </div>
            {!error && hint && <span className="imiui-input-note hint t-label-regular-supertiny">{hint}</span>}
            {error && <span className="imiui-input-note error t-label-regular-supertiny">{error}</span>}
        </Fragment>
    )
}

export default Input;