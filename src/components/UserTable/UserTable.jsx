import React from "react";
import UserRow from "./UserRow";

const UserTable = ({ users, toggleMenu, handleDelete, menuIndex }) => {
    return (
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
                {users.slice(0, 5).map((user, index) => (
                    <UserRow key={index} user={user} index={index} toggleMenu={toggleMenu} handleDelete={handleDelete} menuIndex={menuIndex} />
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
