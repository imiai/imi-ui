import React, { useRef, useState } from "react";
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
}

const Select = (props: ISelect) => {
    const {options, className, ...rest} = props;
    const [showOptions, setShowOptions] = useState(false);
    const ref = useRef(null)

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
                disabled
                readOnly
                withLabel={true}
                endIcon={<ArrowDownIcon fill="var(--imiui-gray-200)" className={`arrow-icon${showOptions ? ' rotate' : ''}`}/>}
            />
            {showOptions && <Card className="options" variant='dialogue'>
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