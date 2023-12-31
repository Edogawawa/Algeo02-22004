// import React from "react";
import PropTypes from "prop-types";
import { returnPaginationRange } from "../utils/paginationUtils";

function Pagination(props) {
    let array = returnPaginationRange(props.totalPage, props.page, props.support);
    return (
        <ul className="pagination pagination-md justify-content-end">
            <li className="page-item"><span onClick={() => props.onPageChange("<")} className="page-link">&lsaquo;</span></li>
            {array.map(value => {
                if (value !== props.page) {
                    return (
                        <li key={value} className="page-item"><span onClick={() => props.onPageChange(value)} className="page-link">{value}</span></li>
                    )
                } else {
                    return (
                        <li key={value} className="page-item active"><span onClick={() => props.onPageChange(value)} className="page-link">{value}</span></li>
                    )
                }
            })}
            <li className="page-item"><span onClick={() => props.onPageChange(">")} className="page-link">&rsaquo;</span></li>
        </ul>
    );
}

Pagination.propTypes = {
    totalPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    support: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
