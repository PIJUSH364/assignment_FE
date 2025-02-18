import React from "react";
import { FaHome, FaChevronRight, FaUserCircle } from "react-icons/fa";

const Breadcrumbs = () => {
    return (
        <div className="flex justify-between items-center mb-4">
            <div className="flex items-center text-gray-600">
                <FaHome /> <FaChevronRight className="mx-2" /> <span>User Management</span>
            </div>
            <div className="flex items-center gap-2">
                <FaUserCircle className="text-2xl" /> <span>Admin</span>
            </div>
        </div>
    );
};

export default Breadcrumbs;
