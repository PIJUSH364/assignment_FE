
import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import MoreActions from "./MoreActions";

const UserRow = ({ user, index, toggleMenu, handleDelete, menuIndex }) => {
    const currentDate = new Date();

    return (
        <tr className="border-b hover:bg-gray-50">
            {/* User Details */}
            <td className="p-2 flex items-center gap-2">
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFIoQnASEQh51blUTQTG7eAHKzXX6_NizCw&s"} alt={user.name} className="w-10 h-10 rounded-full" />
                <div>
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                </div>
            </td>

            {/* Access / Role Badges */}
            <td className="p-2">
                <span className={`px-3 py-1 text-sm rounded-full ${user.role === "Admin" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"} `}>
                    {user.role}
                </span>
            </td>

            {/* Last Active */}
            <td className="p-2 text-gray-700">
                {user.updatedAt ? new Date(user.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : currentDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </td>

            {/* Date Added */}
            <td className="p-2 text-gray-700">
                {user.createdAt ? new Date(user.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : currentDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </td>

            {/* More Actions Dropdown */}

            <MoreActions index={index} menuIndex={menuIndex} toggleMenu={toggleMenu} user={user} />
            {/* <td className="p-2 relative ">
                <button onClick={() => toggleMenu(index)} className="p-2 rounded-full hover:bg-gray-200">
                    <FiMoreVertical className="text-gray-600" />
                </button>
                {menuIndex === index && (
                    <div className="font-nunito absolute right-5  w-40 bg-white shadow-lg rounded-lg  z-10">

                        <button className="block w-full text-left px-3 py-1 text-base hover:bg-gray-100">View Profile</button>
                        <button className="block w-full text-left px-3 py-1 text-base hover:bg-gray-100">Edit</button>
                        
                    </div>
                )}
            </td> */}
        </tr>
    );
};

export default UserRow;
