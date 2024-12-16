import { useCallback } from "react";
import axios from "axios";
import {
  addContact,
  addContactMetaData,
  setLoaderStatus,
} from "../../../features/contactSlice";
import { baseurl } from "../../../env";
import { useDispatch } from "react-redux";
import { useFetchCategoryContact } from "./useFetchCategoryContact";

export const useFetchContacts = () => {
  const dispatch = useDispatch();
  const fetchCategoryContact = useFetchCategoryContact();
  const fetchContacts = useCallback(
    async (query = "", pageIndex = 1) => {
      dispatch(setLoaderStatus(true));

      try {
        const response = await axios.get(
          `${baseurl}/all_contact?page=${pageIndex}&limit=5&search=${query}`
        );

        if (response?.data?.code === 200 && response.data?.data?.data) {
          const { data, meta } = response.data.data;
          dispatch(addContact(data));
          dispatch(addContactMetaData(meta));
          fetchCategoryContact();
        }
      } catch (error) {
        console.error("Error fetching contacts:", error.message);
      } finally {
        dispatch(setLoaderStatus(false));
      }
    },
    [dispatch]
  );

  return fetchContacts;
};
