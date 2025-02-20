import React from "react";
import AccessRow from "./AccessRow";


const AccessTable = ({ users, toggleMenu, handleDelete, menuIndex }) => {
    return (
        <div className="overflow-hidden rounded-lg">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-3 font-nunito rounded-tl-lg">Name</th>
                        <th className="p-3 font-nunito">Email</th>
                        <th className="p-3 font-nunito">Role</th>
                        <th className="p-3 font-nunito">Last Active</th>
                        <th className="p-3 rounded-tr-lg">Setting</th>
                    </tr>
                </thead>
                <tbody>
                    {users.slice(0, 5).map((user, index) => (
                        <AccessRow
                            key={index}
                            user={user}
                            index={index}
                            toggleMenu={toggleMenu}
                            handleDelete={handleDelete}
                            menuIndex={menuIndex}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AccessTable;
