import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { FaUsers, FaCog, FaHome, FaChevronRight, FaUserCircle } from "react-icons/fa";
import { usersData } from "../../utils/constant/data";

const UserList = () => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState(usersData);
    const [roleFilter, setRoleFilter] = useState("");
    const [menuIndex, setMenuIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) &&
            (roleFilter ? user.role === roleFilter : true)
    );

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    const handleDelete = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
    };

    const toggleMenu = (index) => {
        setMenuIndex(menuIndex === index ? null : index);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
                <nav>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer">
                            <FaHome /> Dashboard
                        </li>
                        <li className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer">
                            <FaUsers /> User Management
                        </li>
                        <li className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer">
                            <FaCog /> Settings
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Breadcrumbs and User Log */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-gray-600">
                        <FaHome /> <FaChevronRight className="mx-2" /> <span>User Management</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaUserCircle className="text-2xl" /> <span>Admin</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">User Management</h2>
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="Search user..."
                                className="p-2 border rounded"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <select
                                className="p-2 border rounded"
                                value={roleFilter}
                                onChange={(e) => setRoleFilter(e.target.value)}
                            >
                                <option value="">All Roles</option>
                                <option value="Admin">Admin</option>
                                <option value="Editor">Editor</option>
                                <option value="Developer">Developer</option>
                            </select>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add User</button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200 text-left">
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Role</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Joined</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentUsers.map((user, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-100 relative">
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
                                ))}
                            </tbody>
                        </table>



                        {/* Pagination Controls */}
                        <div className="flex justify-between items-center mt-4">
                            <button
                                className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"}`}
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <span>Page {currentPage} of {totalPages}</span>
                            <button
                                className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 text-white"}`}
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserList;
