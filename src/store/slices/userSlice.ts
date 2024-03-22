import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user", // name of slice
    initialState: { count:10}, //init start value
    reducers: {} // logic
});

export default userSlice.reducer;