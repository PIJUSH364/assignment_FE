import { useCallback } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addUser, setTotalPage, setTotalUserCount } from "../../../features/users/userSlice";

export const useFetchUsers = () => {
    const dispatch = useDispatch();

    const fetchUser = useCallback(
        async (pageIndex = 2, pageSize = 5, currentUrl = "") => {
            try {
                const paginationUrl = `page=${pageIndex}&pageSize=${pageSize}`
                const defaultUrl = `${"http://localhost:8001/api/v1/user"}/get_user_data?` + paginationUrl;
                let originalUrl = defaultUrl;

                if (currentUrl !== "") {
                    originalUrl = currentUrl + paginationUrl;
                }

                const res = await axios.get(originalUrl);
                if (res.data?.code == 200 && res.data?.data) {
                    toast.success(res.data.message);
                    dispatch(addUser(res.data.data || []));
                    dispatch(setTotalPage(res.data.pagination?.totalPages || 0));
                    dispatch(setTotalUserCount(res.data.pagination?.totalRecords || 0));
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
