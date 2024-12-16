import { useCallback } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCategoryContactData } from "../../../features/contactSlice";
import { baseurl } from "../../../env";
import { status } from "../../../Enum";
import { toast } from "sonner";

export const useFetchCategoryContact = () => {
  const dispatch = useDispatch();

  const fetchCategoryContact = useCallback(
    async (query = "", filterBy = "") => {
      query = query.trim();
      filterBy = filterBy.trim();
      try {
        const response = await axios.get(
          `${baseurl}/count_category?${`search=${query}`}
          ${status.includes(filterBy) ? `&filterBy=${filterBy}` : ""}`
        );

        if (response.status == 200 && response.data?.data) {
          toast.success("hello");
          dispatch(setCategoryContactData(response.data.data));
        }
      } catch (error) {
        console.error("Error fetching category contacts:", error.message);
      }
    },
    [dispatch]
  );

  return fetchCategoryContact;
};
