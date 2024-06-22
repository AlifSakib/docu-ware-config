// store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  generalFormValues: {
    firstName: "",
    lastName: "",
    email: "",
  },
};

const createNewUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setGeneralFormValues: (state, action) => {
      state.generalFormValues = action.payload;
    },
  },
});

export const { setGeneralFormValues } = createNewUserSlice.actions;
export default createNewUserSlice.reducer;
