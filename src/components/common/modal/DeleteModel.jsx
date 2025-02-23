import React, { useState } from "react";
import API_URLS from "../../../utils/constant/UrlContant";
import axios from "axios";
import {
  resetFilterValue,
  ResetPaginationMetaData,
  setModalStatus,
} from "../../../features/users/userSlice";
import { useDispatch } from "react-redux";
import { useFetchUsers } from "../../custom/Hook/useFetchUsers";
import toast from "react-hot-toast";
import { allModalStatus } from "../../../utils/enum";

export default function DeleteModel({ setShouldShow, id, toggleMenu }) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { fetchUser } = useFetchUsers();

  const handleDelete = async () => {
    setIsLoading((prev) => !prev);
    axios
      .delete(API_URLS.USER.DELETE, {
        data: { id: String(id) },
      })
      .then(async (res) => {
        toast.success(res.data.message);
        toggleMenu(-1);
        setShouldShow(false);
        dispatch(ResetPaginationMetaData());
        dispatch(resetFilterValue());
        await fetchUser();
      })
      .catch((err) => {
        const message = err?.response?.data?.message || "Something went wrong";
        // console.log(message);
        toast.error(message);
      })
      .finally(() => {
        setIsLoading((prev) => !prev);
      });
  };

  const handleCancel = () => {
    toggleMenu(-1);
    dispatch(
      setModalStatus({
        key: allModalStatus.DELETE_USER,
        value: false,
      })
    );
    setShouldShow(false);
  };
  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-sm md:max-w-md p-6 rounded-lg shadow-lg">
        <p className="text-end text-gray-600 cursor-pointer text-lg">
          <i className="fa-solid fa-x" onClick={() => setShouldShow(false)}></i>
        </p>
        <p className="text-center text-xl font-semibold text-gray-800 font-nunito">
          Are you sure?
        </p>
        <div className="flex justify-evenly mt-6">
          <button
            className={`delete-modal-btn bg-red-500 hover:bg-red-600 text-white`}
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Yes"}
          </button>
          <button
            className={`delete-modal-btn`}
            onClick={handleCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
