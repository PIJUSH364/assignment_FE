import { useCallback } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addUser } from "../../../features/users/userSlice";

export const useFetchUsers = () => {
    const dispatch = useDispatch();

    const fetchUser = useCallback(
        async (pageIndex = 2) => {
            try {
                const res = await axios.get(`${"http://localhost:8001/api/v1/user"}/get_user_data?page=${pageIndex}`)
                if (res.data?.code == 200 && res.data?.data) {
                    toast.success(res.data.message);
                    dispatch(addUser(res.data.data || []));
                }
            } catch (error) {
                console.error("Error fetching contacts:", error.message);
                toast.error(error.message);
            } finally {

            }
        },
        []
    );

    return { fetchUser };
};
