import React from "react";
import { CheckboxSquareCheckedIcon, CheckboxSquareUncheckedIcon } from "../../icons";
import './styles.scss';

interface ICheckboxProps extends React.HTMLProps<HTMLInputElement> {
    labelClassName?: string;
}

const Checkbox = (props: ICheckboxProps) => {
    const {label, labelClassName = 't-label-regular-tiny ', ...rest} = props;

    return (
        <label className="imiui-checkbox">
            <input {...rest} type="checkbox" />
            <span className={labelClassName}>{label}</span>
            <span className="checkmark">
                <CheckboxSquareCheckedIcon fill="var(--imiui-primary-blue)" className="svg-checked" />
                <CheckboxSquareUncheckedIcon className="svg-unchecked" />
            </span>
        </label>
    )
}

export default Checkbox;