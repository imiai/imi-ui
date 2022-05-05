import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React, { useState, useEffect } from 'react';
import ArrowLeftIcon from '../../icons/components/ArrowLeftIcon.js';
import ArrowRightIcon from '../../icons/components/ArrowRightIcon.js';
import './styles.scss.js';

var Paging = function (props) {
    var _a = props.className, className = _a === void 0 ? '' : _a, _b = props.currentPage, currentPage = _b === void 0 ? 1 : _b, _c = props.totalItem, totalItem = _c === void 0 ? 10 : _c, _d = props.itemPerPage, itemPerPage = _d === void 0 ? 8 : _d, _e = props.onPageChange, onPageChange = _e === void 0 ? function () { } : _e, rest = __rest(props, ["className", "currentPage", "totalItem", "itemPerPage", "onPageChange"]);
    var _f = useState([]), pages = _f[0], setPages = _f[1];
    var _g = useState({ totalPage: 0, fromItem: 0, toItem: 0 }), pagingInfo = _g[0], setPagingInfo = _g[1];
    var getPageList = function (_a) {
        var totalPages = _a.totalPages, page = _a.page, maxLength = _a.maxLength;
        function range(start, end) {
            return Array.from(Array(end - start + 1), function (_, i) { return i + start; });
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
            .concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
    };
    useEffect(function () {
        var _pages = range(1, Math.ceil(totalItem / itemPerPage));
        setPagingInfo({
            totalPage: _pages.length,
            fromItem: (currentPage - 1) * itemPerPage + 1,
            toItem: getToItem(totalItem, currentPage, itemPerPage)
        });
        var pageList = getPageList({ totalPages: _pages.length, page: currentPage, maxLength: 9 });
        setPages(pageList);
    }, [currentPage, itemPerPage, totalItem]);
    var getToItem = function (totalItem, currentPage, itemPerPage) {
        return (totalItem - ((currentPage - 1) * itemPerPage) < itemPerPage) ? totalItem : currentPage * itemPerPage;
    };
    var range = function (from, to, step) {
        if (step === void 0) { step = 1; }
        var i = from;
        var range = [];
        while (i <= to) {
            range.push(i);
            i += step;
        }
        return range;
    };
    var onButtonClick = function (page) {
        onPageChange(page);
    };
    return (React.createElement("div", __assign({ className: "imiui-paging ".concat(className || '') }, rest),
        React.createElement("p", { className: 'imiui-paging__title t-label-regular-tiny' }, "".concat(pagingInfo.fromItem, " - ").concat(pagingInfo.toItem, " of ").concat(totalItem)),
        React.createElement("div", { className: 'imiui-paging__list' },
            React.createElement("button", { className: 'imiui-paging__button arrow', disabled: currentPage === 1, onClick: function () { return onButtonClick(currentPage - 1); } },
                React.createElement(ArrowLeftIcon, { width: 20, height: 20, fill: 'var(--imiui-gray-200)' })),
            pages.map(function (item, index) {
                if (item !== 0) {
                    return (React.createElement("button", { key: index, onClick: function () { return onButtonClick(item); }, className: "imiui-paging__button t-label-regular-tiny ".concat(item === currentPage && "imiui-paging__buttonSelecting"), disabled: item === currentPage }, item));
                }
                return (React.createElement("button", { key: index, className: "imiui-paging__button t-label-regular-tiny ".concat(item === currentPage && "imiui-paging__buttonSelecting"), disabled: item === currentPage }, "..."));
            }),
            React.createElement("button", { className: 'imiui-paging__button arrow', onClick: function () { return onButtonClick(currentPage + 1); }, disabled: currentPage === pagingInfo.totalPage },
                React.createElement(ArrowRightIcon, { width: 20, height: 20, fill: 'var(--imiui-gray-200)' })))));
};

export { Paging as default };
//# sourceMappingURL=index.js.map
