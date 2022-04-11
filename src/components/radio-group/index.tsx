import Radio from "components/radio";
import React, { useEffect } from "react";

interface IRadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: any;
    children?: React.ReactNode;
}

const RadioGroup = (props: IRadioGroupProps) => {
    const { children, value, ...rest } = props;

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { 
                defaultChecked: child.props.value === value
            });
        }
        return child;
    });

    return (
        <div {...rest}>
            {childrenWithProps}
        </div>
    )
}

export default RadioGroup