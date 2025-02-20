import React from "react";
import { FiPlus } from "react-icons/fi";
import { MdFilterList } from "react-icons/md";
import { FaSearch } from 'react-icons/fa';
const Filters = ({ search, setSearch, roleFilter, setRoleFilter,title="All User" ,count=43}) => {
    return (
        <div className=" flex justify-between items-baseline pb-2">
            <h2 className="text-lg font-bold mb-4 font-nunito">{`${title} (${count})`}</h2>
            <div className="flex  gap-4">
                <div className="relative flex items-center">
                    {search === '' && <FaSearch className="absolute left-3 text-gray-400" />}
                    <input
                        type="text"
                        placeholder="Search"
                        className="border-gray-200 border-2 outline-none rounded-[7px] px-10 py-[0.3rem]"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                {/* <select
                    className="border rounded"
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                >
                    <option value="">All Roles</option>
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="Developer">Developer</option>
                </select> */}
                <div
                    className="border-gray-200 border-2 cursor-pointer flex items-center gap-1 text-black text-sm rounded-[7px] px-3 py-[0.3rem]">
                    <MdFilterList />
                    Filter
                </div>

                <div
                    className="cursor-pointer flex items-center gap-1 text-white bg-black text-sm  px-2 py-[0.3rem] rounded-[7px]">
                    <FiPlus />
                    Add User
                </div>
            </div>
        </div>

    );
};

export default Filters;
