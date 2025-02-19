import React from "react";
import { FaUsers, FaCog, FaHome } from "react-icons/fa";

const Sidebar = () => {
    return (
        <aside className="w-64 h-screen bg-white shadow-md p-6 flex flex-col">
            <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
            <nav className="flex-1">
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
    );
};

export default Sidebar;
