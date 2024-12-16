import { useCallback } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCategoryContactData } from "../../../features/contactSlice";
import { baseurl } from "../../../env";

export const useFetchCategoryContact = () => {
  const dispatch = useDispatch();

  const fetchCategoryContact = useCallback(
    async (query = "", filterBy = "") => {
      try {
        const response = await axios.get(`${baseurl}/count_category`);

        if (response.status == 200 && response.data?.data) {
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
