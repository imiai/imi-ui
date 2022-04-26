import React from "react";
import { CheckboxSquareCheckedIcon, CheckboxSquareUncheckedIcon } from "../../icons";
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
                <CheckboxSquareCheckedIcon fill="var(--imiui-primary-blue)" className="svg-checked" />
                <CheckboxSquareUncheckedIcon className="svg-unchecked" />
            </span>
        </label>
    )
}

export default Checkbox;