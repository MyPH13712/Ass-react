import React from 'react'
import ReactPaginate from 'react-paginate'

export interface IPaginationProps {
    initialPage?: number;
    marginPagesDisplayed?: number;
    pageCount: number;
    pageRangeDisplayed?: number;
    onChange: ({ selected }: { selected: number }) => void;

}

export const Pagination: React.FC<IPaginationProps> = ({ initialPage, marginPagesDisplayed, pageCount, pageRangeDisplayed, onChange }) => {
    return (
        <ReactPaginate
            initialPage={initialPage}
            marginPagesDisplayed={marginPagesDisplayed}
            pageCount={pageCount}
            pageRangeDisplayed={pageRangeDisplayed}
            onPageChange={onChange}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName = {'page-link'}
            previousClassName = {'page-item'}
            previousLinkClassName = {'page-link'}
            previousAriaLabel = {'Previous'}
            nextClassName = {'page-item'}
            nextLinkClassName = {'page-link'}
            nextAriaLabel = {'Next'}
            breakClassName = {'page-item'}
            breakLinkClassName = {'page-link'}
            activeClassName = {'active'}
        />

    )
}

export default Pagination