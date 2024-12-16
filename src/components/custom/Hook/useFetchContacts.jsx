import { useCallback } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  addContactMetaData,
  setLoaderStatus,
} from "../../../features/contactSlice";
import { baseurl } from "../../../env";

export const useFetchContacts = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.contact.currentPage);
  const searchValue = useSelector((state) => state.contact.searchValue);

  const fetchContacts = useCallback(
    async (query = "") => {
      if (!currentPage) {
        console.warn("Current page is not defined.");
        return;
      }

      dispatch(setLoaderStatus(true));

      try {
        console.log("searchValue", searchValue);
        const response = await axios.get(
          `${baseurl}/all_contact?page=${currentPage}&limit=5&search=${query}`
        );

        // Use optional chaining consistently
        if (response?.data?.code === 200 && response.data?.data?.data) {
          const { data, meta } = response.data.data;
          dispatch(addContact(data));
          dispatch(addContactMetaData(meta));
        }
      } catch (error) {
        console.error("Error fetching contacts:", error.message);
      } finally {
        dispatch(setLoaderStatus(false));
      }
    },
    [dispatch, currentPage]
  );

  return fetchContacts;
};
