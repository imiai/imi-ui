import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useClickAnyWhere, useOnClickOutside } from "../../hooks";
import { ArrowDownIcon, ArrowDownSpecialIcon } from "../../icons";
import Card from "../card";
import Input from "../input";
import './styles.scss';

interface ISelectItem {
    label: string;
    value: any;
}

interface ISelect extends React.HTMLProps<HTMLInputElement> {
    options?: Array<ISelectItem>;
    className?: string;
    inputClassName?: string;
    withLabel?: boolean;
}

const Select = (props: ISelect) => {
    const {options, className, inputClassName = '', withLabel, ...rest} = props;
    const [showOptions, setShowOptions] = useState(false);
    const ref = useRef(null)
    const optionsRef = useRef(null);
    const [optionsPosition, setOptionsPosition] = useState({top: 'calc(100% + 1px)', bottom: 'auto'})

    useLayoutEffect(() => {
        let el = ref.current;
        if (el) {
            let _height = options.length * 36;
            _height = _height > 330 ? 330 : _height;
            if (el.offsetParent.scrollHeight - el.offsetTop < _height) {
                setOptionsPosition({top: 'auto', bottom: 'calc(100% + 1px)'})
            }
        }
    }, [ref])

    useOnClickOutside(ref, () => setShowOptions(false))
    
    const onInputChange = (event: any, option: any) => {
        if (option) {
            event.target.value = option;
            rest.onChange(event)
        } else {
            rest.onChange(event)
        }
        let timer = setTimeout(() => {
            setShowOptions(false)
            clearTimeout(timer)
        }, 50)
    }

    return (
        <div className={`imiui-select${className ? ` ${className}` : ''}`} ref={ref} onClick={() => setShowOptions(!showOptions)}>
            <Input 
                {...rest}
                inputClassName={inputClassName}
                disabled
                readOnly
                withLabel={withLabel}
                endIcon={<ArrowDownIcon fill="var(--imiui-gray-200)" className={`arrow-icon${showOptions ? ' rotate' : ''}`}/>}
            />
            {showOptions && <Card ref={optionsRef} id='imiui-select-options-id' style={{...optionsPosition}} className="options" variant='dialogue'>
                {options.map((option, index) => {
                    return (
                        <button key={index} onClick={(event) => onInputChange(event, option)} className={'t-label-regular-tiny'}>
                            <div>{option.label}</div>
                        </button>
                    )
                })}
            </Card>}
        </div>
    )
}

export default Select