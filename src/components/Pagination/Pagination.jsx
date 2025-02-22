import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useSelector } from "react-redux";
import { useFetchUsers } from "../custom/Hook/useFetchUsers";
import { useDebouncedEffect } from "../custom/Hook/useDebouncedEffect";

const Pagination = ({ currentPage, setCurrentPage }) => {
    const { fetchUser } = useFetchUsers();
    const totalPages = useSelector(state => state.user.totalPage);
    const users = useSelector(state => state.user.userList);
    const [pageSize, setPageSize] = useState(5);


    // Debounce API call
    useDebouncedEffect(() => {
        fetchUser(currentPage, pageSize);
    }, [currentPage, pageSize], 2000);

    const handlePageSizeChange = (e) => {
        let value = parseInt(e.target.value, 10);
        if (Number.isNaN(value) || value < 1 || value > 100) return;
        setPageSize(value);
    };

    return (
        <>
            {users.length ? (
                <div className="flex justify-center items-center w-full px-6 mt-6 relative">
                    <div className="flex gap-2 items-center absolute left-1/2 transform -translate-x-1/2">
                        <button
                            className="pagination_next_prev"
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            aria-label="Previous Page"
                            aria-disabled={currentPage === 1}
                        >
                            <GrPrevious />
                        </button>

                        <div className="flex justify-center items-center space-x-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                                <button
                                    key={number}
                                    className={`w-6 h-6 p-2 rounded-[4px] text-sm flex items-center justify-center
                                    ${currentPage === number ? "bg-gray-400 text-white" : "bg-gray-200"}`}
                                    onClick={() => setCurrentPage(number)}
                                    aria-label={`Page ${number}`}
                                    aria-current={currentPage === number ? "page" : undefined}
                                >
                                    {number}
                                </button>
                            ))}
                        </div>

                        <button
                            className="pagination_next_prev"
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            aria-label="Next Page"
                            aria-disabled={currentPage === totalPages}
                        >
                            <GrNext />
                        </button>
                    </div>

                    <div className="ml-auto hidden sm:flex">
                        <div className="flex items-center gap-3">
                            <label className="text-sm font-medium" htmlFor="pageSize">Page Size:</label>
                            <input
                                type="number"
                                id="pageSize"
                                value={pageSize}
                                min="1"
                                max="100"
                                onChange={handlePageSizeChange}
                                className="w-16 h-8 border border-gray-400 rounded-md p-1 text-center outline-none font-nunito"
                                aria-label="Select Page Size"
                            />
                            <span className="text-sm font-medium font-nunito">/ pages</span>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Pagination;
