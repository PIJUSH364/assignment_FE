import React from "react";
import { FiMoreVertical } from "react-icons/fi";

const UserRow = ({ user, index, toggleMenu, handleDelete, menuIndex }) => {
    return (
        <tr className="border-b hover:bg-gray-100 relative">
            <td className="p-3">{user.name}</td>
            <td className="p-3">{user.email}</td>
            <td className="p-3">{user.role}</td>
            <td className="p-3">
                <span className={`px-2 py-1 rounded text-white ${user.status === "Active" ? "bg-green-500" : "bg-red-500"}`}>
                    {user.status}
                </span>
            </td>
            <td className="p-3">{user.joined}</td>
            <td className="p-3 relative">
                <button onClick={() => toggleMenu(index)} className="p-2 rounded hover:bg-gray-200">
                    <FiMoreVertical />
                </button>
                {menuIndex === index && (
                    <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded z-10">
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Edit</button>
                        <button onClick={() => handleDelete(index)} className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">Delete</button>
                    </div>
                )}
            </td>
        </tr>
    );
};

export default UserRow;
