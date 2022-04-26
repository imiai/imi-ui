import React from 'react';
import './styles.scss';
interface IRadioProps extends React.HTMLProps<HTMLInputElement> {
    label?: string;
}
declare const Radio: (props: IRadioProps) => JSX.Element;
export default Radio;
