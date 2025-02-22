import React, { useState } from "react";
import MoreActions from "./MoreActions";
import { dateFormatter, requestCounter } from "../../utils/method/helper";
import ToggleSwitch from "../common/ToggleSwitch";
import axios from "axios";
import toast from "react-hot-toast";
import { useFetchUsers } from "../custom/Hook/useFetchUsers";
import SelectDropDown from "../common/SelectDropDown";

const url = "http://localhost:8001/api/v1/user/update_user";
const UserRow = ({ user, index, toggleMenu, menuIndex, setShouldShow, onSelect, isSelected }) => {
    const [toggleStatus, setToggleStatus] = useState(user.status.toUpperCase() === "ACTIVE");
    const [role, setRole] = useState(user.role.toLowerCase());
    const { fetchUser } = useFetchUsers();

    const handleToggle = async () => {
        await throttleRequest(async () => {
            setToggleStatus(!toggleStatus);
            const data = { status: !toggleStatus ? "active" : "inactive", id: String(user.id) }
            await updateUser(data)
        });
    };

    const handleRoleChange = async (role) => {
        await throttleRequest(async () => {
            const data = { role: role.toLowerCase(), id: String(user.id) }
            await updateUser(data)
        });
    };


    async function updateUser(data) {
        try {
            const res = await axios.put(url, data);
            toast.success(res.data.message);
            await fetchUser();
        } catch (err) {
            console.error(err);
            toast.error("Error updating user data.");
        }
    }

    const handleDropDownChange = (e) => {
        const newRole = e.target.value;
        setRole(newRole); // Update local state
        handleRoleChange(newRole); // Send update request
    }

    return (
        <tr className="border-b hover:bg-gray-50">
            {/* Checkbox */}
            <td className="p-2 text-center align-middle">
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onSelect(user.id)}
                    className="w-4 h-4 cursor-pointer"
                />
            </td>

            {/* User Details */}
            <td className="p-2 flex items-center gap-2 align-middle">
                <img
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFIoQnASEQh51blUTQTG7eAHKzXX6_NizCw&s"}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                </div>
            </td>

            {/* Access / Role Assignment Dropdown */}
            <td className="p-2 align-middle">
                <SelectDropDown role={role} handleDropDownChange={handleDropDownChange} />
            </td>


            {/* Toggle Switch */}
            <td className="p-2 text-center align-middle">
                <ToggleSwitch toggleStatus={toggleStatus} onChange={handleToggle} />
            </td>

            {/* Last Active */}
            <td className="p-2 text-gray-700 font-nunito align-middle text-center">
                {user.updatedAt ? dateFormatter(user.updatedAt) : dateFormatter()}
            </td>

            {/* Date Added */}
            <td className="p-2 text-gray-700 font-nunito align-middle text-center">
                {user.createdAt ? dateFormatter(user.createdAt) : dateFormatter()}
            </td>

            <td className="p-2 text-center align-middle">
                <MoreActions index={index} menuIndex={menuIndex} toggleMenu={toggleMenu} user={user} setShouldShow={setShouldShow} />
            </td>
        </tr>
    );
};

const throttleRequest = async (callback) => {
    if (requestCounter.isThrottled) {
        toast.error("Too many requests! Please wait 10 seconds.");
        return;
    }

    requestCounter.count += 1;

    if (requestCounter.count >= 10) {
        requestCounter.isThrottled = true;
        toast.error("Rate limit reached. Waiting 10 seconds...");
        setTimeout(() => {
            requestCounter.count = 0;
            requestCounter.isThrottled = false;
            toast.success("You can make requests again.");
        }, 5000);
    }

    await callback();
};


export default UserRow;
