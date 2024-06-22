import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserManagementState {
  selectedTab: number;
}

const initialState: UserManagementState = {
  selectedTab: 0,
};

const userManagementSlice = createSlice({
  name: "userManagement",
  initialState,
  reducers: {
    setSelectedTab(state: UserManagementState, action: PayloadAction<number>) {
      state.selectedTab = action.payload;
    },
  },
});

export const { setSelectedTab } = userManagementSlice.actions;

export default userManagementSlice.reducer;
