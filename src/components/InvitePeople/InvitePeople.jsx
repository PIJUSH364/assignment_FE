import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaSearch } from 'react-icons/fa';
const InvitePeople = ({ search, setSearch, }) => {

    const [inviteEmail, setInviteEmail] = useState('');
    const [role, setRole] = useState('member');
    return (
        <div className=" flex justify-between items-baseline pb-2">

            {/* left side */}
            <div className="relative flex items-center">
                {search === '' && <FaSearch className="absolute left-3 text-gray-400" />}
                <input
                    type="text"
                    placeholder="Search by name or email"
                    className="border-gray-200 border-2 outline-none rounded-[7px] px-10 py-[0.3rem]"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            {/* right side */}
            <div className="flex">
                <div className="relative flex items-center">
                    {search === '' && <FaSearch className="absolute left-3 text-gray-400" />}
                    <input
                        type="text"
                        placeholder="Invite by email"
                        className="border-gray-200 border-2 outline-none  px-10 py-[0.3rem]"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>


                <select
                    className="border border-l-0 outline-none px-2"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="member">member</option>
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="Developer">Developer</option>
                </select>

                <div
                    className="cursor-pointer flex items-center gap-1 text-white bg-black text-sm  px-6 py-[0.3rem] ">
                    Invite
                </div>
            </div>

        </div>

    );
};

export default InvitePeople;
