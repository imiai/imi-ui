import React from "react";
interface IRadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: any;
    children?: React.ReactNode;
}
declare const RadioGroup: (props: IRadioGroupProps) => JSX.Element;
export default RadioGroup;
