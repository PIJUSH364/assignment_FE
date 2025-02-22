import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdFilterList, MdRefresh } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Modal from "../common/Modal";
import UserModel from "../common/modal/UserModel";
import axios from "axios";
import toast from "react-hot-toast";
import { addUser, setPaginationMetaData, setSearchValue } from "../../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import FilterUserModel from "../common/modal/FilterUserModel";
import { useFetchUsers } from "../custom/Hook/useFetchUsers";
import { useDebouncedEffect } from "../custom/Hook/useDebouncedEffect";

const Filters = ({ title = "All User" }) => {
    const totalUserCount = useSelector(state => state.user.totalUserCount);
    const searchValue = useSelector(state => state.user.searchValue);
    const [shouldShow, setShouldShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isRest, setIsRest] = useState(false);
    const [isOpenFilterModel, setIsOpenFilterModel] = useState(false);

    const dispatch = useDispatch();
    const { fetchUser } = useFetchUsers();

    useDebouncedEffect(() => {
        if (searchValue !== "") {
            return fetchUser(1, 5);
        }
    }, [isRest, searchValue], 2000);


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

    return (
        <>
            {isOpen && <Modal shouldShow={shouldShow} setShouldShow={setShouldShow}>
                <UserModel setShouldShow={setShouldShow} />
            </Modal>}


            {isOpenFilterModel && <Modal shouldShow={shouldShow} setShouldShow={setShouldShow}>
                <FilterUserModel setShouldShow={setShouldShow} />
            </Modal>}

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
                                dispatch(setSearchValue(e.target.value.trim()))
                            }}
                        />
                    </div>

                    {/* Filter Button */}
                    <button
                        onClick={() => {
                            setShouldShow(true)
                            setIsOpenFilterModel(true)
                            setIsOpen(false)
                        }}
                        className="flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-100 px-4 py-2 h-8 rounded-md text-sm  font-nunito"
                    >
                        <MdFilterList />
                        Filter
                    </button>

                    {/* Add User Button */}
                    <button
                        onClick={() => {
                            setIsOpen(true)
                            setShouldShow(true)
                            setIsOpenFilterModel(false)
                        }
                        }
                        className="font-nunito flex items-center gap-2  border border-gray-300 bg-white hover:bg-gray-100 text-sm px-4 py-2 h-8 rounded-md"
                    >
                        <FiPlus />
                        Add User
                    </button>

                    {/* Reset Button */}
                    <button
                        onClick={() => {
                            toast.success("Filters reset successfully");
                            setIsRest(!isRest);
                            dispatch(setPaginationMetaData({ key: "currentPage", value: 1 }));
                            dispatch(setPaginationMetaData({ key: "pageSize", value: 5 }));
                            dispatch(setSearchValue(""))
                        }}
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
