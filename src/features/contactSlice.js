
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contactList: [],
    contactMetaData: null,
    loaderStatus: false,
    currentPage: 1,
    categoryContactData: [],
    searchValue: ""
};


const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contactList = action.payload
        },
        addContactMetaData: (state, action) => {
            state.contactMetaData = action.payload
        },
        setLoaderStatus: (state, action) => {
            state.loaderStatus = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setCategoryContactData: (state, action) => {
            state.categoryContactData = action.payload
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
    },
});

export const { addContactMetaData, addContact, setLoaderStatus, setCurrentPage, setCategoryContactData, setSearchValue } = contactSlice.actions;
export default contactSlice.reducer;
