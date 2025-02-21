import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addUser, setTotalPage } from "../../features/users/userSlice";
import ViewProfile from "../common/modal/ViewProfile";
import Modal from "../common/Modal";


const UserTable = ({ handleDelete }) => {
    const [sortByDesc, setSortByDesc] = useState(true);
    const [shouldShow, setShouldShow] = useState(false);
    const [menuIndex, setMenuIndex] = useState(-1);

    const dispatch = useDispatch();
    const users = useSelector(state => state.user.userList);

    const handleSort = () => {
        const data = [...users].sort((a, b) => sortByDesc ? new Date(b.updatedAt) - new Date(a.updatedAt)
            : new Date(a.updatedAt) - new Date(b.updatedAt));

        dispatch(addUser(data));
    }
    const toggleMenu = (index) => {
        setMenuIndex(index === menuIndex ? -1 : index);
    }

    useEffect(() => {
        axios.get(`${"http://localhost:8001/api/v1/user"}/get_user_data?page=1`)
            .then((res) => {
                if (res.data?.code == 200 && res.data?.data) {
                    dispatch(addUser(res.data.data || []));
                    dispatch(setTotalPage(res.data.pagination.totalPages || 0));
                    toast.success(res.data.message);
                }
            }).catch((err) => {
                toast.error("Error fetching users Data");
            });
    }, [])


    return (
        <div className="overflow-hidden rounded-lg">
            <Modal shouldShow={shouldShow} setShouldShow={setShouldShow}>
                {shouldShow && <ViewProfile setShouldShow={setShouldShow} menuIndex={menuIndex} />}
            </Modal>

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
                            setShouldShow={setShouldShow}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
