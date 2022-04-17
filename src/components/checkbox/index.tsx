import React from "react";
import { CheckboxChecked, CheckboxUnchecked } from "icons";
import './styles.scss';

interface ICheckboxProps extends React.HTMLProps<HTMLInputElement> {

}

const Checkbox = (props: ICheckboxProps) => {
    const {label, ...rest} = props;

    return (
        <label className="imiui-checkbox">
            <input {...rest} type="checkbox" />
            <span className="t-label-regular-tiny">{label}</span>
            <span className="checkmark ripple">
                <CheckboxChecked className="svg-checked" />
                <CheckboxUnchecked className="svg-unchecked" />
            </span>
        </label>
    )
}

export default Checkbox;