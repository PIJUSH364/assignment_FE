import React from "react";
import { FaUsers, FaCog, FaHome, FaPaintBrush, FaDatabase, FaPlug, FaClock, FaBell, FaLock, FaKey, FaMoneyBill, FaFileImport, FaFileExport, FaBook } from "react-icons/fa";

const Sidebar = () => {
    return (
        <aside className="w-64 h-screen bg-white shadow-md p-6 flex flex-col font-nunito">
            <h2 className="text-xl font-semibold mb-4">Admin CMS</h2>

            {/* Navigation Container with Flex */}
            <nav className="flex-1 flex flex-col justify-between">
                <ul className="space-y-4 flex-1 flex flex-col justify-between">

                    {/* Group 1 */}
                    <div className="space-y-4">
                        <div className="flex flex-col space-y-2">
                            <li className="sidebar-nav-group-title">GENERAL</li>
                            <li className="sidebar-nav-item">
                                <FaHome /> Dashboard
                            </li>
                            <li className="sidebar-nav-item">
                                <FaPaintBrush /> Appearance
                            </li>
                            <li className="sidebar-nav-item">
                                <FaDatabase /> Database
                            </li>
                            <li className="sidebar-nav-item">
                                <FaPlug /> Connections
                            </li>
                            <li className="sidebar-nav-item">
                                <FaClock /> Timezones
                            </li>
                            <li className="sidebar-nav-item">
                                <FaBell /> Notifications
                            </li>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <li className="sidebar-nav-group-title">SISYPHUS VENTURES</li>
                            <li className="sidebar-nav-item">
                                <FaUsers /> User Management
                            </li>
                            <li className="sidebar-nav-item">
                                <FaLock /> Security & Access
                            </li>
                            <li className="sidebar-nav-item">
                                <FaKey /> Authentication
                            </li>
                            <li className="sidebar-nav-item">
                                <FaMoneyBill /> Payments
                            </li>
                            <li className="sidebar-nav-item">
                                <FaFileImport /> Import Data
                            </li>
                            <li className="sidebar-nav-item">
                                <FaFileExport /> Export Data
                            </li>
                        </div>
                    </div>

                    {/* Group 2 - Always at Bottom */}
                    <div className="space-y-2">
                        <li className="sidebar-nav-item">
                            <FaCog /> Settings
                        </li>
                        <li className="sidebar-nav-item">
                            <FaBook /> Documentation
                        </li>
                    </div>

                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
