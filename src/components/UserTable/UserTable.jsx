import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";


const UserTable = ({ toggleMenu, handleDelete, menuIndex }) => {
    const [sortByDesc, setSortByDesc] = useState(true);
    const [users, setUsers] = useState([])

    const handleSort = () => {
        setUsers((prevData) =>
            [...prevData].sort((a, b) => sortByDesc ? new Date(b.updatedAt) - new Date(a.updatedAt)
                : new Date(a.updatedAt) - new Date(b.updatedAt))
        );
    }


    useEffect(() => {
        axios.get(`${"http://localhost:8001/api/v1/user"}/get_all_users`)
            .then((res) => {
                if (res.data?.code == 200 && res.data?.data) {
                    setUsers(res.data.data);
                    toast.success(res.data.message);
                }
            }).catch((err) => {
                toast.error("Error fetching users Data");
            });
    }, [])


    return (
        <div className="overflow-hidden rounded-lg">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-3 font-nunito rounded-tl-lg">User Name</th>
                        <th className="p-3 font-nunito">Access</th>

                        {/* Last Active with Icon */}
                        <th className="p-3 font-nunito cursor-pointer"
                            onClick={() => {
                                handleSort()
                                setSortByDesc(!sortByDesc)
                            }}
                        >
                            <div className="inline-flex items-center gap-1">
                                Last Active
                                {
                                    sortByDesc ? <FaArrowDown className="text-gray-600" /> : <FaArrowUp className="text-gray-600" />
                                }

                            </div>
                        </th>

                        <th className="p-3 font-nunito">Date Added</th>

                        {/* Last column with width */}
                        <th className="p-3 rounded-tr-lg "></th>
                    </tr>
                </thead>


                <tbody>
                    {users.map((user, index) => (
                        <UserRow
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

export default UserTable;
