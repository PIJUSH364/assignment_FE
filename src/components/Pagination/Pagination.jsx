
import React from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-center gap-2 items-center mt-4">
            <button
                className="pagination_next_prev"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
            >
                <GrPrevious />
            </button>
            <div className="flex justify-center items-center space-x-2">
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        className={`w-6 h-6 p-2 rounded-[4px] text-sm flex items-center justify-center
                            ${currentPage === number ? "bg-gray-400 text-white" : "bg-gray-200"}`}
                        onClick={() => setCurrentPage(number)}
                    >
                        {number}
                    </button>
                ))}
            </div>
            <button
               className="pagination_next_prev"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
            >
                <GrNext />
            </button>
        </div>
    );
};

export default Pagination;
