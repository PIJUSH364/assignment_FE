import React, { useState } from 'react'
import Pagination from '../components/Pagination/Pagination';
import DashboardLayout from '../layouts/DashboardLayout';
import { usersData } from '../utils/constant/data';
import AccessTable from '../components/AccessTable/AccessTable';
import InvitePeople from '../components/InvitePeople/InvitePeople';

export default function AccessManagement() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;
    return (
        <DashboardLayout breadCrumbsTitle="Access Management">
            <div className="mb-4 flex justify-between">
                <h2 className="text-xl font-semibold  font-nunito">Manage people</h2>
                <p className="text-sm font-extralight text-blue-400 underline">
                    <a href="#" target='_blank'>Learn more</a>
                </p>
            </div>

            <InvitePeople search={search} setSearch={setSearch} />
            <h2 className="text-lg font-bold mb-4 mt-2 font-nunito">{`${'All Member'} (${15})`}</h2>
            <AccessTable users={usersData} />
            <Pagination currentPage={currentPage} totalPages={Math.ceil(usersData.length / usersPerPage)} setCurrentPage={setCurrentPage} />
        </DashboardLayout>
    );
}
