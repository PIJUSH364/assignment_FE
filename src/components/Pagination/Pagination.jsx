import React from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { useSelector } from "react-redux";
import { useFetchUsers } from "../custom/Hook/useFetchUsers";

const Pagination = ({ currentPage, setCurrentPage }) => {
    const pageNumbers = [];
    const { fetchUser } = useFetchUsers()
    const totalPages = useSelector(state => state.user.totalPage);
    const users = useSelector(state => state.user.userList);
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            {
                users.length ?
                    <div className="flex justify-center gap-2 items-center mt-8">
                        <button
                            className="pagination_next_prev"
                            onClick={async () => {
                                setCurrentPage(prev => Math.max(prev - 1, 1))
                                await fetchUser(Math.min(currentPage - 1, 1))
                            }}
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
                                    onClick={async () => {
                                        if (currentPage === number) return
                                        setCurrentPage(number)
                                        await fetchUser(number)
                                    }}
                                >
                                    {number}
                                </button>
                            ))}
                        </div>
                        <button
                            className="pagination_next_prev"
                            onClick={async () => {
                                setCurrentPage(prev => Math.min(prev + 1, totalPages))
                                await fetchUser(Math.min(currentPage + 1, totalPages))
                            }}
                            disabled={currentPage === totalPages}
                        >
                            <GrNext />
                        </button>
                    </div>
                    : null
            }
        </>

    );
};

export default Pagination;
