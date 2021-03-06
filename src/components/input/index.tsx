import { CloseT2Icon } from "../../icons";
import React, { Fragment, useLayoutEffect, useRef, useState } from "react";
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
    inputClassName?: string;
}

const Input = (props: IInputProps) => {
    const ref = useRef(null);

    const { options = [], placeholder = '', className, inputClassName = '', withLabel = false, hint = '', error = '', isError = false, onClear, endIcon, onEndIconClick, style = {}, ...rest } = props;
    const [focused, setFocused] = useState(false)
    const [optionsPosition, setOptionsPosition] = useState({top: 'calc(100% + 1px)', bottom: 'auto'})
    const [renderOptions, setRenderOptions] = useState<Array<ISelectItem>>(options);

    useLayoutEffect(() => {
        let el = ref.current;
        if (el && el.offsetParent) {
            let _height = options.length * 36;
            _height = _height > 330 ? 330 : _height;
            if (el.offsetParent.scrollHeight - el.offsetTop < _height) {
                setOptionsPosition({top: 'auto', bottom: 'calc(100% + 1px)'})
            }
        }
    }, [ref])


    const onFocus = (e: any) => {
        setFocused(true)
        rest.onFocus && rest.onFocus(e)
    }

    const onBlur = (e: any) => {
        let timer = setTimeout(() => {
            setFocused(false);
            clearTimeout(timer);
        }, 100)
        rest.onBlur && rest.onBlur(e)
    }

    const getInputWidth = () => {
        let minus = withLabel ? 36 : 0;
        if (onClear && endIcon) {
            minus += 60 + 16;
            return minus;
        }
        if (onClear || endIcon) {
            minus += 20 + 16;
            return minus;
        }
        return minus
    }

    const onInputChange = (event: any, option: ISelectItem) => {
        let _options = options.filter(item => item.label.includes(event.target.value))
        setRenderOptions(_options)
        if (option) {
            event.target.value = option.value;
            rest.onChange(event)
        } else {
            rest.onChange(event)
        }
    }

    return (
        <Fragment>
            <div ref={ref} className={`imiui-input${isError ? ' error' : ''}${rest.disabled ? ' disabled' : ''}${withLabel ? ' label' : ''}${className ? ` ${className}` : ''}`}>
                <input {...rest} onFocus={onFocus} onBlur={onBlur} onChange={(event) => onInputChange(event, null) } className={`t-label-regular-tiny ${inputClassName}`} placeholder={placeholder} style={{ width: `calc(100% - ${getInputWidth()}px`, ...style }} />
                {withLabel && <label>{placeholder}</label>}
                <div className="icon-container">
                    {onClear && !rest.disabled &&
                        <button type="button" className="icon close" onClick={() => onClear()}>
                            <CloseT2Icon />
                        </button>}
                    {onClear && endIcon && <hr />}
                    {endIcon &&
                        <button type="button" className="icon" onClick={onEndIconClick ? () => onEndIconClick() : () => { }}>
                            {endIcon}
                        </button>
                    }
                </div>
                {focused && <Card className="autocomplete-options" variant='dialogue' style={{...optionsPosition}} >
                    {renderOptions.map((option, index) => {
                        return (
                            <button type="button" key={index} onClick={(event) => onInputChange(event, option)} className={`t-label-regular-tiny ${option.value === rest.value ? 'active' : ''}`}>
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