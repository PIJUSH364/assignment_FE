import React from "react";
import {
    FaUsers,
    FaCog,
    FaHome,
    FaPaintBrush,
    FaDatabase,
    FaPlug,
    FaClock,
    FaBell,
    FaLock,
    FaKey,
    FaMoneyBill,
    FaFileImport,
    FaFileExport,
    FaBook,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <aside
            className="w-64 h-screen bg-white shadow-md p-6 flex flex-col font-nunito"
            aria-label="Sidebar navigation"
        >
            <h2 className="text-xl font-semibold mb-4">Admin CMS</h2>

            {/* Navigation Container */}
            <nav
                className="flex-1 flex flex-col justify-between"
                aria-label="Main navigation"
            >
                <ul className="space-y-4 flex-1 flex flex-col justify-between">
                    {/* Group 1 */}
                    <div
                        className="space-y-4"
                        role="group"
                        aria-labelledby="general-section"
                    >
                        <div className="flex flex-col space-y-2">
                            <li
                                id="general-section"
                                className="sidebar-nav-group-title"
                                role="presentation"
                            >
                                GENERAL
                            </li>
                            <li className="sidebar-nav-item" role="menuitem">
                                <FaHome aria-hidden="true" /> <span>Dashboard</span>
                            </li>
                            <li className="sidebar-nav-item" role="menuitem">
                                <FaPaintBrush aria-hidden="true" /> <span>Appearance</span>
                            </li>
                            <li className="sidebar-nav-item" role="menuitem">
                                <FaDatabase aria-hidden="true" /> <span>Database</span>
                            </li>
                            <li className="sidebar-nav-item" role="menuitem">
                                <FaPlug aria-hidden="true" /> <span>Connections</span>
                            </li>
                            <li className="sidebar-nav-item" role="menuitem">
                                <FaClock aria-hidden="true" /> <span>Timezones</span>
                            </li>
                            <li className="sidebar-nav-item" role="menuitem">
                                <FaBell aria-hidden="true" /> <span>Notifications</span>
                            </li>
                        </div>

                        <div
                            className="flex flex-col space-y-2"
                            role="group"
                            aria-labelledby="druta-section"
                        >
                            <li
                                id="druta-section"
                                className="sidebar-nav-group-title"
                                role="presentation"
                            >
                                DRUTA VENTURES
                            </li>
                            <li
                                className="sidebar-nav-item"
                                role="menuitem"
                                onClick={() => navigate("/users")}
                                tabIndex={0}
                                onKeyDown={(e) => e.key === "Enter" && navigate("/users")}
                                aria-label="User Management"
                            >
                                <FaUsers aria-hidden="true" /> <span>User Management</span>
                            </li>
                            <li className="sidebar-nav-item" role="menuitem">
                                <FaLock aria-hidden="true" /> <span>Security & Access</span>
                            </li>
                            <li className="sidebar-nav-item" role="menuitem">
                                <FaKey aria-hidden="true" /> <span>Authentication</span>
                            </li>
                            <li className="sidebar-nav-item" role="menuitem">
                                <FaMoneyBill aria-hidden="true" /> <span>Payments</span>
                            </li>
                            <li className="sidebar-nav-item" role="menuitem">
                                <FaFileImport aria-hidden="true" /> <span>Import Data</span>
                            </li>
                            <li className="sidebar-nav-item" role="menuitem">
                                <FaFileExport aria-hidden="true" /> <span>Export Data</span>
                            </li>
                        </div>
                    </div>

                    {/* Group 2 - Always at Bottom */}
                    <div
                        className="space-y-2"
                        role="group"
                        aria-labelledby="settings-section"
                    >
                        <li
                            id="settings-section"
                            className="sidebar-nav-item"
                            role="menuitem"
                        >
                            <FaCog aria-hidden="true" /> <span>Settings</span>
                        </li>
                        <li className="sidebar-nav-item" role="menuitem">
                            <FaBook aria-hidden="true" /> <span>Documentation</span>
                        </li>
                    </div>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
