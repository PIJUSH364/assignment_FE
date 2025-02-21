import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdFilterList, MdRefresh } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Modal from "../common/Modal";
import UserModel from "../common/modal/UserModel";
import axios from "axios";
import toast from "react-hot-toast";
import { addUser } from "../../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "../../utils/method/helper";

const Roles = ["Member", "Admin"];

const Filters = ({ search, setSearch, title = "All User" }) => {
    const totalUserCount = useSelector(state => state.user.totalUserCount);
    const [shouldShow, setShouldShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const handleSort = async (value = "") => {
        try {
            const { data } = await axios.get(
                `http://localhost:8001/api/v1/user/filter_user_data?role=${value.toLowerCase()}`
            );

            if (data?.code === 200) {
                dispatch(addUser(data.data || []));
                toast.success(data.message);
            } else {
                toast.error("Error fetching users data");
            }
        } catch (error) {
            toast.error("Error fetching users data");
        }
        setIsOpen(false);
    };

    const handleReset = () => {
        setSearch(""); // Clear search input
        // dispatch(addUser([])); // Reset user list
        toast.success("Filters reset successfully");
    };

    const handleSearchData = debounce(async (value, cancelTokenSource) => {
        try {
            const { data } = await axios.get(
                `http://localhost:8001/api/v1/user/search_user_details?search=${value}`,
                { cancelToken: cancelTokenSource.token }
            );

            if (data?.code === 200) {
                dispatch(addUser(data.data || []));
                toast.success(data.message);
            } else {
                toast.error("Error fetching users data");
            }
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log("Request canceled:", error.message);
            } else {
                toast.error(`Error fetching users data: ${error.message}`);
            }
        }
    }, 3000);

    const handleInputChange = (e) => {
        const value = e.target.value.trim();
        setSearch(value);
        handleSearchData(value);
    };

    return (
        <>
            <Modal shouldShow={shouldShow} setShouldShow={setShouldShow}>
                {shouldShow && <UserModel setShouldShow={setShouldShow} />}
            </Modal>

            <div className="flex justify-between items-center pb-4">
                <h2 className="text-lg font-bold font-nunito">{`${title} (${totalUserCount})`}</h2>

                {/* Controls */}
                <div className="flex items-center gap-3">
                    {/* Search Input */}
                    <div className="relative flex items-center">
                        {search === "" && <FaSearch className="absolute left-3 text-gray-400" />}
                        <input
                            type="text"
                            placeholder="Search"
                            className="font-nunito border border-gray-300 outline-none rounded-md px-10 py-2 h-8"
                            value={search}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* Filter Button */}
                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-100 px-4 py-2 h-8 rounded-md text-sm  font-nunito"
                        >
                            <MdFilterList />
                            Filter
                        </button>

                        {/* Dropdown */}
                        {isOpen && (
                            <div className="absolute left-0 mt-2 w-48 bg-white border shadow-md rounded-md z-50">
                                {Roles.map((role, index) => (
                                    <button
                                        key={index}
                                        className="font-nunito flex items-center px-3 py-1 text-base hover:bg-gray-100 w-full text-left"
                                        onClick={() => handleSort(role)}
                                    >
                                        {role}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Add User Button */}
                    <button
                        onClick={() => setShouldShow(true)}
                        className="font-nunito flex items-center gap-2  border border-gray-300 bg-white hover:bg-gray-100 text-sm px-4 py-2 h-8 rounded-md"
                    >
                        <FiPlus />
                        Add User
                    </button>

                    {/* Reset Button */}
                    <button
                        onClick={handleReset}
                        className="font-nunito flex items-center gap-2 text-white bg-black  hover:bg-gray-700 text-sm px-4 py-2 h-8 rounded-md"
                    >
                        <MdRefresh />
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
};

export default Filters;
