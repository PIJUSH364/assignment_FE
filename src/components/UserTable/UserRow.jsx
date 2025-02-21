import React, { useState } from "react";
import MoreActions from "./MoreActions";
import { dateFormatter } from "../../utils/method/helper";
import ToggleSwitch from "../common/ToggleSwitch";

const UserRow = ({ user, index, toggleMenu, menuIndex, setShouldShow, onSelect, isSelected }) => {
    const [toggleStatus, setToggleStatus] = useState(user.status.toUpperCase() === "ACTIVE");

    const handleToggle = () => {
        setToggleStatus(!toggleStatus);
    };

    return (
        <tr className="border-b hover:bg-gray-50">
            {/* Checkbox */}
            <td className="p-2 text-center align-middle">
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onSelect(user.id)}
                    className="w-4 h-4 cursor-pointer"
                />
            </td>

            {/* User Details */}
            <td className="p-2 flex items-center gap-2 align-middle">
                <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFIoQnASEQh51blUTQTG7eAHKzXX6_NizCw&s"}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                </div>
            </td>

            {/* Access / Role Badges */}
            <td className="p-2 align-middle">
                <span
                    className={`px-3 py-1 text-sm rounded-full ${user.role === "Admin" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                        }`}
                >
                    {user.role.toUpperCase()}
                </span>
            </td>

            {/* Toggle Switch */}
            <td className="p-2 text-center align-middle">
                <ToggleSwitch toggleStatus={toggleStatus} onChange={handleToggle} />
            </td>

            {/* Last Active */}
            <td className="p-2 text-gray-700 font-nunito align-middle text-center">
                {user.updatedAt ? dateFormatter(user.updatedAt) : dateFormatter()}
            </td>

            {/* Date Added */}
            <td className="p-2 text-gray-700 font-nunito align-middle text-center">
                {user.createdAt ? dateFormatter(user.createdAt) : dateFormatter()}
            </td>


            <td className="p-2 text-center align-middle">
                <MoreActions
                    index={index}
                    menuIndex={menuIndex}
                    toggleMenu={toggleMenu}
                    user={user}
                    setShouldShow={setShouldShow}
                />
            </td>
        </tr>
    );
};

export default UserRow;
