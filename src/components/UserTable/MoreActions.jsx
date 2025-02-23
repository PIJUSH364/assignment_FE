import { useRef, useMemo, useCallback, useState } from "react";
import {
    FiMoreVertical,
    FiUser,
    FiEdit,
    FiSettings,
    FiDownload,
    FiTrash2,
} from "react-icons/fi";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useFetchUsers } from "../custom/Hook/useFetchUsers";
import { useDispatch, useSelector } from "react-redux";
import {
    resetFilterValue,
    ResetPaginationMetaData,
    setModalStatus,
} from "../../features/users/userSlice";
import { allModalStatus } from "../../utils/enum";
import DeleteModel from "../common/modal/DeleteModel";
import Modal from "../common/Modal";
import toast from "react-hot-toast";
import API_URLS from "../../utils/constant/UrlConstant";
import axios from "axios";

const MoreActions = ({
    index,
    menuIndex,
    toggleMenu,
    user,
    setShouldShow,
    shouldShow,
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const dropdownRef = useRef(null);
    const dispatch = useDispatch();
    const { deleteUserModalStatus } = useSelector(
        (state) => state.user.allModalStatus
    );
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

            const excelBuffer = XLSX.write(workbook, {
                bookType: "xlsx",
                type: "array",
            });
            const dataBlob = new Blob([excelBuffer], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });

            saveAs(dataBlob, `User.xlsx`);
        } catch (error) {
            console.error("Error exporting user data", error);
        }
    };

    const handleDelete = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await axios.delete(API_URLS.USER.DELETE, {
                data: { ids: [user.id] },
            });

            toast.success(response.data.message, { position: "bottom-right" });
            toggleMenu(-1);
            setShouldShow(false);
            dispatch(ResetPaginationMetaData());
            dispatch(resetFilterValue());
            await fetchUser();
        } catch (error) {
            const message = error?.response?.data?.message || "Something went wrong";
            toast.error(message);
        } finally {
            setIsLoading(false);
        }
    }, [toggleMenu, setShouldShow, dispatch, fetchUser]);

    const handleCancel = () => {
        toggleMenu(-1);
        dispatch(setModalStatus({ key: allModalStatus.DELETE_USER, value: false }));
        setShouldShow(false);
    };

    const position = useMemo(() => {
        // if (menuIndex === index && dropdownRef.current) {
        //     const rect = dropdownRef.current.getBoundingClientRect();
        //     const spaceBelow = window.innerHeight - rect.bottom;
        //     return spaceBelow < 150 ? "top" : "bottom";
        // }
        return "top";
    }, [menuIndex, index]); // Runs only when the menu opens

    return (
        <div className="p-2 relative">
            {deleteUserModalStatus && (
                <Modal shouldShow={shouldShow} setShouldShow={setShouldShow}>
                    <DeleteModel
                        setShouldShow={setShouldShow}
                        isLoading={isLoading}
                        handleDelete={handleDelete}
                        handleCancel={handleCancel}
                    />
                </Modal>
            )}
            <button
                onClick={() => toggleMenu(index)}
                className="p-2 rounded-full hover:bg-gray-200"
            >
                <FiMoreVertical className="text-gray-600" />
            </button>

            {menuIndex === index && (
                <div
                    ref={dropdownRef}
                    className={`font-nunito absolute right-5 w-48 bg-white shadow-lg rounded-lg z-20 
                        ${position === "top" ? "bottom-full mb-[-1.1rem]" : "top-full mt-[-1.1rem]"}`}
                >
                    <button
                        className="drop_down_button"
                        onClick={() => {
                            dispatch(
                                setModalStatus({ key: allModalStatus.VIEW_USER, value: true })
                            );
                            setShouldShow(true);
                        }}
                    >
                        <FiUser className="drop_down_button_icon" /> View Profile
                    </button>
                    <button
                        className="drop_down_button"
                        onClick={() => {
                            dispatch(
                                setModalStatus({ key: allModalStatus.EDIT_USER, value: true })
                            );
                            setShouldShow(true);
                        }}
                    >
                        <FiEdit className="drop_down_button_icon" /> Edit Details
                    </button>
                    <button
                        className="drop_down_button"
                        onClick={() => {
                            setShouldShow(true);
                            dispatch(
                                setModalStatus({
                                    key: allModalStatus.PERMISSION_CHANGE,
                                    value: true,
                                })
                            );
                        }}
                    >
                        <FiSettings className="drop_down_button_icon" /> Change Permission
                    </button>
                    <button className="drop_down_button" onClick={handleExport}>
                        <FiDownload className="drop_down_button_icon" /> Export Details
                    </button>
                    <button
                        onClick={() => {
                            setShouldShow(true);
                            dispatch(
                                setModalStatus({ key: allModalStatus.DELETE_USER, value: true })
                            );
                        }}
                        className="flex items-center w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100"
                    >
                        <FiTrash2 className="mr-2 text-red-500" /> Delete User
                    </button>
                </div>
            )}
        </div>
    );
};

export default MoreActions;
