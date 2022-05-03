import React from "react";

interface ITableProps extends React.HTMLProps<HTMLTableElement> {
}


const Table = (props: ITableProps) => {
    const { className, children, ...rest } = props;
    return (
        <table {...rest} className={`imiui-table${className ? ` ${className}` : ''}`}>
            {children}
        </table>
    )
}

export default Table;