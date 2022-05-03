import React from "react";

interface ITableBodyProps {
    className?: string;
    children?: React.ReactNode;
}

const TableBody = (props: ITableBodyProps) => {
    const { className, children, ...rest } = props;
    return (
        <tbody {...rest} className={`imiui-table-body${className ? ` ${className}` : ''}`}>
            {children}
        </tbody>
    )
}

export default TableBody