import React from "react";
import './styles.scss';

interface ITableRowProps extends React.HTMLProps<HTMLTableRowElement> {
}

const TableRow = (props: ITableRowProps) => {
    const { className, children, ...rest } = props;
    return (
        <tr {...rest} className={`imiui-table-row${className ? ` ${className}` : ''}`}>
            {children}
        </tr>
    )
}

export default TableRow