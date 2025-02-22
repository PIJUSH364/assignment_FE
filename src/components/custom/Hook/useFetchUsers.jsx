import { useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addUser, setTotalPage, setTotalUserCount } from "../../../features/users/userSlice";

export const useFetchUsers = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector(state => state.user.searchValue);

    const fetchUser = useCallback(
        async (pageIndex = 2, pageSize = 5) => {
            try {
                const defaultUrl = `http://localhost:8001/api/v1/user/get_user_data?page=${pageIndex}&pageSize=${pageSize}&search=${searchValue}`;

                const res = await axios.get(defaultUrl);
                if (res.data?.code === 200 && res.data?.data) {
                    toast.success(res.data.message);
                    dispatch(addUser(res.data.data || []));
                    dispatch(setTotalPage(res.data.pagination?.totalPages || 0));
                    dispatch(setTotalUserCount(res.data.pagination?.totalRecords || 0));
                }
            } catch (error) {
                console.error("Error fetching users:", error.message);
                toast.error(error.message);
            }
        },
        [searchValue, dispatch] // Dependency array added
    );

    return { fetchUser };
};
