import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdFilterList, MdRefresh } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Modal from "../common/Modal";
import UserModel from "../common/modal/UserModel";
import toast from "react-hot-toast";
import {
    resetFilterValue,
    ResetPaginationMetaData,
    setSearchValue,
} from "../../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import FilterUserModel from "../common/modal/FilterUserModel";
import ResetButton from "./ResetButton";

const Filters = ({ title = "All User", setIsRest, setLocalPageSize }) => {
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
        setLocalPageSize(5)
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

            <div className="flex justify-between items-center pb-4">
                <h2 className="text-lg font-bold font-nunito">{`${title} (${totalUserCount})`}</h2>

                {/* Controls */}
                <div className="flex items-center gap-3">
                    {/* Search Input */}
                    <div className="relative flex items-center">
                        <FaSearch className="absolute left-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="font-nunito border border-gray-300 outline-none rounded-md px-10 py-2 h-8"
                            value={searchValue}
                            onChange={(e) => {
                                dispatch(setSearchValue(e.target.value.trim()));
                            }}
                        />
                    </div>

                    {/* Filter Button */}
                    <button
                        onClick={handleFilter}
                        className="primary-bw-btn"
                    >
                        <MdFilterList />
                        Filter
                    </button>

                    {/* Add User Button */}
                    <button
                        onClick={handleNewUser}
                        className="primary-bw-btn"
                    >
                        <FiPlus />
                        Add User
                    </button>

                    <ResetButton handleRest={handleRest} />
                </div>
            </div>
        </>
    );
};

export default Filters;
