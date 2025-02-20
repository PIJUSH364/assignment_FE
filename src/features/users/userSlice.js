import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
  contactMetaData: null,
  loaderStatus: false,
  currentPage: 1,
  categoryContactData: [],
  searchValue: "",
  filterValue: "",
  pageRange: [1],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userList = action.payload;
    },
    addContactMetaData: (state, action) => {
      state.contactMetaData = action.payload;
    },
    setLoaderStatus: (state, action) => {
      state.loaderStatus = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCategoryContactData: (state, action) => {
      state.categoryContactData = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
      state.filterValue = "";
    },
    setFilterValue: (state, action) => {
      state.filterValue = action.payload.trim();
      state.searchValue = "";
    },
    resetFilterValue: (state) => {
      state.filterValue = "";
      state.searchValue = "";
    },
    setInitialPageRange: (state) => {
      state.currentPage = 1;
      if (state.contactMetaData) {
        state.pageRange = new Array(
          state.contactMetaData.totalPages > 5
            ? 5
            : state.contactMetaData.totalPages
        )
          .fill(null)
          .map((_, index) => index + 1);
      }
    },

    setCustomPageRange: (state, action) => {
      state.pageRange = action.payload;
    },
  },
});

export const {
  addContactMetaData,
  addUser,
  setLoaderStatus,
  setCurrentPage,
  setCategoryContactData,
  setSearchValue,
  setFilterValue,
  resetFilterValue,
  setInitialPageRange,
  setCustomPageRange,
} = userSlice.actions;
export default userSlice.reducer;
