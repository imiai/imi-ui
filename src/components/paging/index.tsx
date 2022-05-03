import { ArrowLeftIcon, ArrowRightIcon } from '../../icons';
import React, { useEffect, useState } from 'react';
import './styles.scss';

interface IPagingProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    currentPage?: number;
    totalItem?: number;
    itemPerPage?: number;
    onPageChange?: Function;
}

const Paging = (props: IPagingProps) => {
    const { className = '', currentPage = 1, totalItem = 10, itemPerPage = 8, onPageChange = () => { }, ...rest } = props;
    const [pages, setPages] = useState([]);
    const [pagingInfo, setPagingInfo] = useState({ totalPage: 0, fromItem: 0, toItem: 0 })


    const getPageList = ({ totalPages, page, maxLength }) => {
        function range(start, end) {
            return Array.from(Array(end - start + 1), (_, i) => i + start);
        }

        var sideWidth = maxLength < 9 ? 1 : 2;
        var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
        var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
        if (totalPages <= maxLength) {
            // no breaks in list
            return range(1, totalPages);
        }
        if (page <= maxLength - sideWidth - 1 - rightWidth) {
            // no break on left of page
            return range(1, maxLength - sideWidth - 1)
                .concat(0, range(totalPages - sideWidth + 1, totalPages));
        }
        if (page >= totalPages - sideWidth - 1 - rightWidth) {
            // no break on right of page
            return range(1, sideWidth)
                .concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
        }
        // Breaks on both sides
        return range(1, sideWidth)
            .concat(0, range(page - leftWidth, page + rightWidth),
                0, range(totalPages - sideWidth + 1, totalPages));
    }

    useEffect(() => {
        let _pages = range(1, Math.ceil(totalItem / itemPerPage))
        setPagingInfo({
            totalPage: _pages.length,
            fromItem: (currentPage - 1) * itemPerPage + 1,
            toItem: getToItem(totalItem, currentPage, itemPerPage)
        })
        let pageList = getPageList({ totalPages: _pages.length, page: currentPage, maxLength: 9 })
        setPages(pageList)
    }, [currentPage, itemPerPage, totalItem])


    const getToItem = (totalItem, currentPage, itemPerPage) => {
        return (totalItem - ((currentPage - 1) * itemPerPage) < itemPerPage) ? totalItem : currentPage * itemPerPage
    }

    const range = (from, to, step = 1) => {
        let i = from;
        const range = [];

        while (i <= to) {
            range.push(i);
            i += step;
        }

        return range;
    }

    const onButtonClick = (page) => {
        onPageChange(page)
    }

    return (
        <div className={`imiui-paging ${className || ''}`} {...rest}>
            <p className={'imiui-paging__title t-label-regular-tiny'}>{`${pagingInfo.fromItem} - ${pagingInfo.toItem} of ${totalItem}`}</p>
            <div className={'imiui-paging__list'}>
                <button
                    className={'imiui-paging__button arrow'}
                    disabled={currentPage === 1}
                    onClick={() => onButtonClick(currentPage - 1)}>
                    <ArrowLeftIcon width={20} height={20} fill={'var(--imiui-gray-200)'} />
                </button>
                {pages.map((item, index) => {
                    if (item !== 0) {
                        return (
                            <button key={index}
                                onClick={() => onButtonClick(item)}
                                className={`imiui-paging__button t-label-regular-tiny ${item === currentPage && `imiui-paging__buttonSelecting`}`}
                                disabled={item === currentPage}>{item}</button>
                        )
                    }
                    return (
                        <button key={index}
                            className={`imiui-paging__button t-label-regular-tiny ${item === currentPage && `imiui-paging__buttonSelecting`}`}
                            disabled={item === currentPage}>...</button>
                    )
                })}
                <button className={'imiui-paging__button arrow'}
                    onClick={() => onButtonClick(currentPage + 1)}
                    disabled={currentPage === pagingInfo.totalPage}>
                    <ArrowRightIcon width={20} height={20} fill={'var(--imiui-gray-200)'} />
                </button>
            </div>
        </div>
    )
}

export default Paging;