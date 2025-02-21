import { useRef, useMemo } from "react";
import { FiMoreVertical, FiUser, FiEdit, FiSettings, FiDownload, FiTrash2 } from "react-icons/fi";
import { showConfirmationToast } from "./customConfirmationToast";
import axios from "axios";
import toast from "react-hot-toast";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useFetchUsers } from "../custom/Hook/useFetchUsers";
import { useDispatch } from "react-redux";
import { setModalStatus } from "../../features/users/userSlice";
import { allModalStatus } from "../../utils/enum";

const MoreActions = ({ index, menuIndex, toggleMenu, user, setShouldShow }) => {
    const dropdownRef = useRef(null);
    const dispatch = useDispatch();
    const { fetchUser } = useFetchUsers();

    const handleExport = () => {
        const userData = { ...user };
        try {
            delete userData.id;
            delete userData.deletedAt;
            delete userData.createdAt;
            delete userData.updatedAt;

            const worksheet = XLSX.utils.json_to_sheet([userData]);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "User Data");

            const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
            const dataBlob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

            saveAs(dataBlob, `User.xlsx`);
        } catch (error) {
            console.error("Error exporting user data", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:8001/api/v1/user/delete_user`, {
                data: { id: String(id) },
            });
            toggleMenu(-1);
            if (res.data?.code === 200) {
                await fetchUser(1);
                toast.success("User deleted successfully!");
            }
        } catch (err) {
            toast.error("Error deleting user");
        }
    };


    const position = useMemo(() => {
        if (menuIndex === index && dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            return spaceBelow < 150 ? "top" : "bottom";
        }
        return "bottom";
    }, [menuIndex, index]); // Runs only when the menu opens

    return (
        <td className="p-2 relative">
            <button onClick={() => toggleMenu(index)} className="p-2 rounded-full hover:bg-gray-200">
                <FiMoreVertical className="text-gray-600" />
            </button>

            {menuIndex === index && (
                <div
                    ref={dropdownRef}
                    className={`font-nunito absolute right-5 w-48 bg-white shadow-lg rounded-lg z-10 
                        ${position === "top" ? "bottom-full mb-[-1.1rem]" : "top-full mt-[-1.1rem]"}`}
                >
                    <button className="drop_down_button"
                        onClick={() => {
                            dispatch(setModalStatus({ key: allModalStatus.VIEW_USER, value: true }))
                            setShouldShow(true)
                        }
                        }
                    >
                        <FiUser className="drop_down_button_icon" /> View Profile
                    </button>
                    <button className="drop_down_button"
                        onClick={() => {
                            dispatch(setModalStatus({ key: allModalStatus.EDIT_USER, value: true }))
                            setShouldShow(true)
                        }
                        }
                    >
                        <FiEdit className="drop_down_button_icon" /> Edit Details
                    </button>
                    <button className="drop_down_button"
                        onClick={() => {
                            setShouldShow(true)
                            dispatch(setModalStatus({ key: allModalStatus.PERMISSION_CHANGE, value: true }))
                        }
                        }
                    >
                        <FiSettings className="drop_down_button_icon" /> Change Permission
                    </button>
                    <button className="drop_down_button" onClick={handleExport}>
                        <FiDownload className="drop_down_button_icon" /> Export Details
                    </button>
                    <button
                        onClick={() => showConfirmationToast(() => handleDelete(user.id))}
                        className="flex items-center w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100"
                    >
                        <FiTrash2 className="mr-2 text-red-500" /> Delete User
                    </button>
                </div>
            )}
        </td>
    );
};

export default MoreActions;
