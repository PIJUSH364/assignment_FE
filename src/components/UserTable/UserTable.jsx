import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addUser, setTotalPage } from "../../features/users/userSlice";
import ViewProfile from "../common/modal/ViewProfile";
import Modal from "../common/Modal";
import UpdateUserModel from "../common/modal/UpdateUserModel";
import { useFetchUsers } from "../custom/Hook/useFetchUsers";
import { CustomSkelton } from "../contactManagement/Home";

const UserTable = ({ handleDelete }) => {
    const [sortByDesc, setSortByDesc] = useState(true);
    const [shouldShow, setShouldShow] = useState(false);
    const [menuIndex, setMenuIndex] = useState(-1);
    const [selectedUsers, setSelectedUsers] = useState([]);


    const dispatch = useDispatch();
    const { fetchUser } = useFetchUsers()
    const users = useSelector(state => state.user.userList);
    const {
        addUserModalStatus,
        editUserModalStatus,
        permissionUserModalStatus,
        viewUserModalStatus
    } = useSelector(state => state.user.allModalStatus);

    const handleSort = () => {
        const data = [...users].sort((a, b) => sortByDesc ? new Date(b.updatedAt) - new Date(a.updatedAt)
            : new Date(a.updatedAt) - new Date(b.updatedAt));

        dispatch(addUser(data));
    }

    const toggleMenu = (index) => {
        setMenuIndex(index === menuIndex ? -1 : index);
    }

    useEffect(async () => {
        await fetchUser(1)
    }, [])


    const handleSelect = (userId) => {
        setSelectedUsers((prev) =>
            prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]
        );
    };
    const handleAllSelect = () => {
        setSelectedUsers((prev) => prev.length === users.length ? [] : [...users.map((user) => user.id)]);
    };

    return (
        <div className=" rounded-lg">
            {viewUserModalStatus && <Modal shouldShow={shouldShow} setShouldShow={setShouldShow}>
                <ViewProfile setShouldShow={setShouldShow} menuIndex={menuIndex} toggleMenu={toggleMenu} />
            </Modal>}
            {editUserModalStatus && <Modal shouldShow={shouldShow} setShouldShow={setShouldShow}>
                <UpdateUserModel setShouldShow={setShouldShow} menuIndex={menuIndex} toggleMenu={toggleMenu} />
            </Modal>}
            {permissionUserModalStatus && <Modal shouldShow={shouldShow} setShouldShow={setShouldShow}>
                <UpdateUserModel setShouldShow={setShouldShow} menuIndex={menuIndex} permissionModal={true} toggleMenu={toggleMenu} />
            </Modal>}

            {users.length
                ?
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-3 rounded-tl-lg">
                                <input
                                    type="checkbox"
                                    checked={selectedUsers.length === users.length}
                                    onChange={handleAllSelect}
                                    className="w-4 h-4 cursor-pointer"
                                />
                            </th>
                            <th className="p-3 font-nunito ">User Name</th>
                            <th className="p-3 font-nunito">Access</th>
                            <th className="p-3 font-nunito">Status</th>
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


                            <th className="p-3 font-nunito rounded-tr-lg ">Action</th>
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
                                onSelect={handleSelect}
                                isSelected={selectedUsers.includes(user.id)}

                            />
                        ))}
                    </tbody>
                </table>
                : <CustomSkelton msg="No record found!   :)" />
            }
        </div>
    );
};

export default UserTable;
