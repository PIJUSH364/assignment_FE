import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MdFilterList } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Modal from "../common/Modal";
import UserModel from "../common/modal/UserModel";

const Roles = ["Member", "Admin"];

const Filters = ({ search, setSearch, title = "All User", count = 43 }) => {
    const [shouldShow, setShouldShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleSort = (order) => {
        console.log(`Sorting in ${order} order`);
        setIsOpen(false);
    };

    return (
        <>
            <Modal shouldShow={shouldShow} setShouldShow={setShouldShow}>
                {shouldShow && <UserModel setShouldShow={setShouldShow} />}
            </Modal>

            <div className="flex justify-between items-center pb-4">
                {/* Title */}
                <h2 className="text-lg font-bold font-nunito">{`${title} (${count})`}</h2>

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
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* Filter Button */}
                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center gap-2 border border-gray-300 px-4 py-2 h-8 rounded-md text-sm bg-white hover:bg-gray-100 font-nunito"
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
                        className="font-nunito flex items-center gap-2 text-white bg-black text-sm px-4 py-2 h-8 rounded-md"
                    >
                        <FiPlus />
                        Add User
                    </button>
                </div>
            </div>
        </>
    );
};

export default Filters;
