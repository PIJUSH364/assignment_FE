import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    return (
        <div className="flex justify-between items-center mt-4">
            <button
                className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"}`}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
                className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 text-white"}`}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
