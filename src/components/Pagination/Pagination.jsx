
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { addUser, setTotalPage } from "../../features/users/userSlice";

const Pagination = ({ currentPage, setCurrentPage }) => {
    const dispatch = useDispatch()
    const totalPages = useSelector(state => state.user.totalPage)
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handleDataFetch = (page) => {
        axios.get(`${"http://localhost:8001/api/v1/user"}/get_user_data?page=${page}`)
            .then((res) => {
                if (res.data?.code == 200 && res.data?.data) {
                    dispatch(addUser(res.data.data || []));
                    dispatch(setTotalPage(res.data.pagination.totalPages));
                    toast.success(res.data.message);
                }
            }).catch((err) => {
                toast.error("Error adding user Data");
            })
    }

    return (
        <div className="flex justify-center gap-2 items-center mt-8">
            <button
                className="pagination_next_prev"
                onClick={() => {
                    setCurrentPage(prev => Math.max(prev - 1, 1))
                    handleDataFetch(Math.min(currentPage - 1, 1))
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
                        onClick={() => {
                            setCurrentPage(number)
                            handleDataFetch(number)
                        }}
                    >
                        {number}
                    </button>
                ))}
            </div>
            <button
                className="pagination_next_prev"
                onClick={() => {
                    setCurrentPage(prev => Math.min(prev + 1, totalPages))
                    handleDataFetch(Math.min(currentPage + 1, totalPages))
                }}
                disabled={currentPage === totalPages}
            >
                <GrNext />
            </button>
        </div>
    );
};

export default Pagination;
