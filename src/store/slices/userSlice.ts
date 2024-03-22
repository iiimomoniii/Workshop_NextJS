import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const userSlice = createSlice({
    name: "user", // name of slice
    initialState: { count:10}, //init start value
    reducers: {
        add:(state) => {
            state.count++; // assign value when click will update count
        }
    } // logic
});

export default userSlice.reducer;
export const userSelector = (state:RootState) => state.userReducer;
export const { add } = userSlice.actions;