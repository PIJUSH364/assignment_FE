import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdFilterList } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Modal from "./common/modal/Modal";
import UserModel from "./common/modal/UserModel";
import toast from "react-hot-toast";
import {
    resetFilterValue,
    ResetPaginationMetaData,
    setSearchValue,
} from "../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import FilterUserModel from "./common/modal/FilterUserModel";
import ResetButton from "./ResetButton";

const TableHeaderAction = ({ title = "All User", setIsRest, setLocalPageSize }) => {
    const dispatch = useDispatch();
    const totalUserCount = useSelector((state) => state.user.totalUserCount);
    const searchValue = useSelector((state) => state.user.searchValue);

    const [shouldShow, setShouldShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenFilterModel, setIsOpenFilterModel] = useState(false);

    const handleRest = () => {
        toast.success("Reset successfully");
        setIsRest((prev) => !prev);
        dispatch(ResetPaginationMetaData());
        dispatch(resetFilterValue());
        dispatch(setSearchValue(""));
        setLocalPageSize(5);
    };

    const handleFilter = () => {
        setShouldShow(true);
        setIsOpenFilterModel(true);
        setIsOpen(false);
    };

    const handleNewUser = () => {
        setIsOpen(true);
        setShouldShow(true);
        setIsOpenFilterModel(false);
    };

    return (
        <>
            {isOpen && (
                <Modal shouldShow={shouldShow} setShouldShow={setShouldShow}>
                    <UserModel setShouldShow={setShouldShow} />
                </Modal>
            )}

            {isOpenFilterModel && (
                <Modal shouldShow={shouldShow} setShouldShow={setShouldShow}>
                    <FilterUserModel setShouldShow={setShouldShow} />
                </Modal>
            )}

            {/* Responsive Container */}
            <div className="flex flex-col sm:flex-row md:flex-row gap-4 justify-between items-start sm:items-center md:items-center pb-4">
                <h2 className="text-base sm:text-lg font-bold font-nunito whitespace-nowrap">{`${title} (${totalUserCount})`}</h2>

                {/* Controls */}
                <div className="flex flex-col sm:flex-row md:flex-row items-start sm:items-center md:items-center gap-3">
                    {/* Search Input */}
                    <div className="relative flex items-center  w-full sm:w-auto">
                        <FaSearch className="absolute left-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="font-nunito border border-gray-300 outline-none rounded-md px-10 py-2 h-8 w-full sm:w-auto"
                            value={searchValue}
                            onChange={(e) => {
                                dispatch(setSearchValue(e.target.value.trim()));
                            }}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Filter Button */}
                        <button onClick={handleFilter} className="primary-bw-btn">
                            <MdFilterList />
                            Filter
                        </button>

                        {/* Add User Button */}
                        <button
                            onClick={handleNewUser}
                            className="primary-bw-btn whitespace-nowrap"
                        >
                            <FiPlus />
                            Add User
                        </button>

                        {/* Reset Button */}
                        <ResetButton handleRest={handleRest} />
                    </div>
                </div>
            </div>
        </>
    );
};





export default TableHeaderAction;
