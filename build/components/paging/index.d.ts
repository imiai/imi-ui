import React from 'react';
import './styles.scss';
interface IPagingProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    currentPage?: number;
    totalItem?: number;
    itemPerPage?: number;
    onPageChange?: Function;
}
declare const Paging: (props: IPagingProps) => JSX.Element;
export default Paging;
