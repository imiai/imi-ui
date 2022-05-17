import React, { useRef, useState } from "react";
import { useClickAnyWhere, useOnClickOutside } from "../../hooks";
import { ArrowDownSpecialIcon } from "../../icons";
import Card from "../card";
import Input from "../input";
import './styles.scss';

interface ISelectItem {
    label: string;
    value: any;
}

interface ISelect extends React.HTMLProps<HTMLInputElement> {
    options?: Array<ISelectItem>;
    renderOption?: Function;
}

const Select = (props: ISelect) => {
    const {options, renderOption, ...rest} = props;
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
        <div className="imiui-select" ref={ref} onClick={() => setShowOptions(true)}>
            <Input 
                {...rest}
                disabled
                readOnly
                withLabel={true}
                endIcon={<ArrowDownSpecialIcon fill="var(--imiui-gray-200)"/>}
            />
            {showOptions && <Card className="options" variant='dialogue'>
                {options.map((option, index) => {
                    return (
                        <button key={index} onClick={(event) => onInputChange(event, option.value)} className={'t-label-regular-tiny'}>
                            {renderOption(option)}
                        </button>
                    )
                })}
            </Card>}
        </div>
    )
}

export default Select