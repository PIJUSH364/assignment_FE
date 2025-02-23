import React, { useState } from "react";
import Filters from "../components/Filters/Filters";
import UserTable from "../components/UserTable/UserTable";
import Pagination from "../components/Pagination/Pagination";
import DashboardLayout from "../layouts/DashboardLayout";

const UserManagement = () => {
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [isRest, setIsRest] = useState(false);
    const [localPageSize, setLocalPageSize] = useState(5);

    return (
        <DashboardLayout>
            <div className="mb-4">
                <h2 className="text-xl font-semibold  font-nunito">User Management</h2>
                <p className="text-sm font-extralight text-gray-500">
                    Manage your team members and their account permissions here.
                </p>
            </div>
            <Filters setIsRest={setIsRest} setLocalPageSize={setLocalPageSize} />
            <UserTable
                selectedUsers={selectedUsers}
                setSelectedUsers={setSelectedUsers}
                isRest={isRest}
            />
            <Pagination
                selectedUsers={selectedUsers}
                setSelectedUsers={setSelectedUsers}
                localPageSize={localPageSize}
                setLocalPageSize={setLocalPageSize}
            />
        </DashboardLayout>
    );
};

export default UserManagement;
