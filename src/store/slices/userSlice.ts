import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const userSlice = createSlice({
    name: "user", // name of slice
    initialState: { count:10}, //init start value
    reducers: {} // logic
});

export default userSlice.reducer;
export const userSelector = (state:RootState) => state.userReducer;