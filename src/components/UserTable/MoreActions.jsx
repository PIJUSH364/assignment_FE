import { useState, useRef, useEffect } from "react";
import { FiMoreVertical, FiUser, FiEdit, FiSettings, FiDownload, FiTrash2 } from "react-icons/fi";

const MoreActions = ({ index, menuIndex, toggleMenu }) => {
    const dropdownRef = useRef(null);
    const [position, setPosition] = useState("bottom");

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
                    <button className="flex items-center w-full text-left px-3 py-2 text-base hover:bg-gray-100">
                        <FiUser className="mr-2 text-gray-600" /> View Profile
                    </button>
                    <button className="flex items-center w-full text-left px-3 py-2 text-base hover:bg-gray-100">
                        <FiEdit className="mr-2 text-gray-600" /> Edit Details
                    </button>
                    <button className="flex items-center w-full text-left px-3 py-2 text-base hover:bg-gray-100">
                        <FiSettings className="mr-2 text-gray-600" /> Change Permission
                    </button>
                    <button className="flex items-center w-full text-left px-3 py-2 text-base hover:bg-gray-100">
                        <FiDownload className="mr-2 text-gray-600" /> Export Details
                    </button>
                    <button className="flex items-center w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100">
                        <FiTrash2 className="mr-2 text-red-500" /> Delete User
                    </button>
                </div>
            )}
        </td>
    );
};

export default MoreActions;
