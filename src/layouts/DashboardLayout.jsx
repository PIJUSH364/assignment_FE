import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";


const DashboardLayout = ({ children }) => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100">
                <Breadcrumbs />
                <div className="bg-white p-6 rounded-lg shadow-md">{children}</div>
            </div>
        </div>
    );
};

export default DashboardLayout;
