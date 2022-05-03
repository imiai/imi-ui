import React from "react";

interface ITableHeaderProps {
    className?: string;
    children?: React.ReactNode;
}

const TableHead = (props: ITableHeaderProps) => {
    const { className, children, ...rest } = props;
    return (
        <thead {...rest} className={`imiui-table-header${className ? ` ${className}` : ''}`}>
            {children}
        </thead>
    )
}

export default TableHead