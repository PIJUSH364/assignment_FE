import React from "react";
import UserRow from "./UserRow";
import { FaArrowDown } from "react-icons/fa";

const UserTable = ({ users, toggleMenu, handleDelete, menuIndex }) => {
    return (
        <div className="overflow-hidden rounded-lg">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-3 font-nunito rounded-tl-lg">User Name</th>
                        <th className="p-3 font-nunito">Access</th>

                        {/* Last Active with Icon */}
                        <th className="p-3 font-nunito cursor-pointer">
                            <div className="inline-flex items-center gap-1">
                                Last Active <FaArrowDown className="text-gray-600" />
                            </div>
                        </th>

                        <th className="p-3 font-nunito">Date Added</th>

                        {/* Last column with width */}
                        <th className="p-3 rounded-tr-lg "></th>
                    </tr>
                </thead>


                <tbody>
                    {users.slice(0, 5).map((user, index) => (
                        <UserRow
                            key={index}
                            user={user}
                            index={index}
                            toggleMenu={toggleMenu}
                            handleDelete={handleDelete}
                            menuIndex={menuIndex}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
