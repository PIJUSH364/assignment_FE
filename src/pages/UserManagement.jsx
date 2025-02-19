import React, { useState } from "react";
import Filters from "../components/Filters/Filters";
import UserTable from "../components/UserTable/UserTable";
import Pagination from "../components/Pagination/Pagination";
import { usersData } from "../utils/constant/data";
import DashboardLayout from "../layouts/DashboardLayout";

const UserManagement = () => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;
    return (
        <DashboardLayout>
            <h2 className="text-xl font-semibold mb-4 ">User Management</h2>
            <Filters search={search} setSearch={setSearch} />
            <UserTable users={usersData} />
            <Pagination currentPage={currentPage} totalPages={Math.ceil(usersData.length / usersPerPage)} setCurrentPage={setCurrentPage} />
        </DashboardLayout>
    );
};

export default UserManagement;


