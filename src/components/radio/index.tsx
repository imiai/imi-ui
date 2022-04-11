import { RadioChecked, RadioUnchecked } from 'icons';
import React from 'react';
import './styles.scss';

interface IRadioProps extends React.HTMLProps<HTMLInputElement> {
    label?: string;
}

const Radio = (props: IRadioProps) => {
    const {label, ...rest} = props;

    return (
        <label className="imiui-radio">
            <input {...rest} type="radio" />
            <span>{label}</span>
            <span className="checkmark ripple">
                <RadioChecked className="svg-checked" />
                <RadioUnchecked className="svg-unchecked" />
            </span>
        </label>
    )
}

export default Radio;