import React from "react";
import Filters from "../components/Filters/Filters";
import UserTable from "../components/UserTable/UserTable";
import Pagination from "../components/Pagination/Pagination";
import { usersData } from "../utils/constant/data";
import DashboardLayout from "../layouts/DashboardLayout";

const UserManagement = () => {
    return (
        <DashboardLayout>
            <div className="mb-4">
                <h2 className="text-xl font-semibold  font-nunito">User Management</h2>
                <p className="text-sm font-extralight text-gray-500">Manage your team members and their account permissions here.</p>
            </div>
            <Filters />
            <UserTable />
            <Pagination />
        </DashboardLayout>
    );
};

export default UserManagement;


