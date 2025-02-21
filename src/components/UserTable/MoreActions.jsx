import { useState, useRef, useEffect } from "react";
import { FiMoreVertical, FiUser, FiEdit, FiSettings, FiDownload, FiTrash2 } from "react-icons/fi";
import { showConfirmationToast } from "./customConfirmationToast";
import axios from "axios";
import { addUser, setTotalPage } from "../../features/users/userSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";


const MoreActions = ({ index, menuIndex, toggleMenu, user, setShouldShow }) => {
    const dropdownRef = useRef(null);
    const dispatch = useDispatch();
    const [position, setPosition] = useState("bottom");



    const handleExport = () => {
        const userData = { ...user };
        try {

            delete userData.id
            delete userData.deletedAt
            delete userData.createdAt
            delete userData.updatedAt

            // Convert JSON data to worksheet
            const worksheet = XLSX.utils.json_to_sheet([userData]);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "User Data");

            // Convert to binary and create blob
            const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
            const dataBlob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

            // Save file
            saveAs(dataBlob, `User.xlsx`);

        } catch (error) {
            console.error("Error exporting user data", error);
        }
    };

    useEffect(() => {
        if (menuIndex === index && dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;

            if (spaceBelow < 150) {
                setPosition("top");
            } else {
                setPosition("bottom");
            }
        }
    }, [menuIndex]);

    const handleDelete = async (id) => {
        try {
            console.log(id);

            // Send DELETE request with id as a query parameter
            const res = await axios.delete(`http://localhost:8001/api/v1/user/delete_user`, {
                data: { id: String(id) } // Use 'data' for DELETE body
            });

            if (res.data?.code === 200) {
                // Fetch updated user data after deletion
                const userRes = await axios.get(`http://localhost:8001/api/v1/user/get_user_data?page=1`);

                if (userRes.data?.code === 200 && userRes.data?.data) {
                    dispatch(addUser(userRes.data.data || []));
                    dispatch(setTotalPage(userRes.data.pagination?.totalPages || 0));
                    toast.success("User deleted successfully!");
                }
            }
        } catch (err) {
            toast.error("Error deleting user");
        }
    };

    return (
        <td className="p-2 relative">
            <button onClick={() => toggleMenu(index)} className="p-2 rounded-full hover:bg-gray-200">
                <FiMoreVertical className="text-gray-600" />
            </button>
            {menuIndex === index && (
                <div
                    ref={dropdownRef}
                    className={`font-nunito absolute right-5 w-48 bg-white shadow-lg rounded-lg z-10 ${position === "top" ? "bottom-full mb-2" : "top-full mt-2"
                        }`}
                >
                    <button className="flex items-center w-full text-left px-3 py-2 text-base hover:bg-gray-100"
                        onClick={() => setShouldShow(true)}
                    >
                        <FiUser className="mr-2 text-gray-600" /> View Profile
                    </button>
                    <button className="flex items-center w-full text-left px-3 py-2 text-base hover:bg-gray-100">
                        <FiEdit className="mr-2 text-gray-600" /> Edit Details
                    </button>
                    <button className="flex items-center w-full text-left px-3 py-2 text-base hover:bg-gray-100">
                        <FiSettings className="mr-2 text-gray-600" /> Change Permission
                    </button>
                    <button className="flex items-center w-full text-left px-3 py-2 text-base hover:bg-gray-100"
                        onClick={handleExport}
                    >
                        <FiDownload className="mr-2 text-gray-600" /> Export Details
                    </button>
                    <button
                        onClick={() => showConfirmationToast(() => handleDelete(user.id))}
                        className="flex items-center w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100">
                        <FiTrash2 className="mr-2 text-red-500" /> Delete User
                    </button>
                </div>
            )}
        </td>
    );
};

export default MoreActions;
