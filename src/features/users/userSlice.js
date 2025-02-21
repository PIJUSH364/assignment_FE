import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
  totalPage: 0,
  allModalStatus: {
    addUserModalStatus: false,
    editUserModalStatus: false,
    permissionUserModalStatus: false,
    viewUserModalStatus: false,
  },
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
    setTotalPage: (state, action) => {
      state.totalPage = action.payload;
    },
    setModalStatus: (state, action) => {
      Object.entries(state.allModalStatus).forEach(
        ([key, _]) => (state.allModalStatus[key] = false)
      );
      state.allModalStatus[action.payload.key] = action.payload.value;
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
  addUser,
  setTotalPage,
  setModalStatus,

  addContactMetaData,
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
