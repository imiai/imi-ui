import React from "react";
import { CheckboxChecked, CheckboxUnchecked } from "icons";
import './styles.scss';
import { useState } from "react";

interface ICheckboxProps extends React.HTMLProps<HTMLInputElement> {

}

const Checkbox = (props: ICheckboxProps) => {
    const {checked, label, disabled, ...rest} = props;
    const [isChecked, setIsChecked] = useState(checked)

    const toggleCheck = (e: any) => {
        if (disabled) {
            return;
        }
        setIsChecked(!isChecked)
        props.onChange && props.onChange(e)
    }

    return (
        <span className={`imiui-checkbox${disabled ? ' disabled' : ''}`} onClick={toggleCheck}>
            <input type={'checkbox'} {...rest}/>
            <span className="checkbox-svg-warrper">
                {isChecked ? <CheckboxChecked className="checkbox-svg"/> : <CheckboxUnchecked className="checkbox-svg"/>}
            </span>
            <span className={`checkbox-overlay${checked ? ' checked' : ' unchecked'}`}></span>
            {label && <label>{label}</label>}
        </span>
    )
}

export default Checkbox;