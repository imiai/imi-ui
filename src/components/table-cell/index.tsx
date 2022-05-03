import React from "react";

interface ITableCellProps extends React.HTMLProps<HTMLTableCellElement> {
}

const TableCell = (props: ITableCellProps) => {
    const { className, children, ...rest } = props;
    return (
        <td {...rest} className={`imiui-table-cell${className ? ` ${className}` : ''}`}>
            {children}
        </td>
    )
}

export default TableCell;