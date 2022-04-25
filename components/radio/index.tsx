import { RadioCheckedIcon, RadioUncheckedIcon } from '../../icons';
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
            <span className='t-label-regular-tiny'>{label}</span>
            <span className="checkmark ripple">
                <RadioCheckedIcon className="svg-checked" />
                <RadioUncheckedIcon className="svg-unchecked" />
            </span>
        </label>
    )
}

export default Radio;