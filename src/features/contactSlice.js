
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contactList: [],
    contactMetaData: null,
    loaderStatus: false,
    currentPage: 1,
    categoryContactData: [],
    searchValue: "",
    filterValue: "",
    pageRange: [1]

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
            state.searchValue = action.payload;
            state.filterValue = "";
        },
        setFilterValue: (state, action) => {
            state.filterValue = action.payload.trim();
            state.searchValue = ""
        },
        resetFilterValue: (state) => {
            state.filterValue = "";
            state.searchValue = ""
        },
        setInitialPageRange: (state) => {
            state.currentPage = 1;
            if (state.contactMetaData) {
                state.pageRange =
                    new Array(state.contactMetaData.totalPages > 5 ? 5 : state.contactMetaData.totalPages)
                        .fill(null)
                        .map((_, index) => index + 1);
            }
        },

        setCustomPageRange: (state, action) => {
            state.pageRange = action.payload
        },

    },
});

export const { addContactMetaData, addContact, setLoaderStatus, setCurrentPage, setCategoryContactData, setSearchValue, setFilterValue, resetFilterValue, setInitialPageRange, setCustomPageRange } = contactSlice.actions;
export default contactSlice.reducer;
