
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contactList: []
};


const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contactList = action.payload
        }
    },
});

export const { increment, addContact } = contactSlice.actions;
export default contactSlice.reducer;
