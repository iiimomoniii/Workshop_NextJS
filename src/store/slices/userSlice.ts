import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import * as service from "@/services/Service";
interface SignAction {
    username: string;
    password: string;
}

const signUp = createAsyncThunk("user/signUp", async (user: SignAction) => {
    //contain logic send request to backend for registration
    const response = await service.signUp(user);
    return response;
}


);
const userSlice = createSlice({
    name: "user", // name of slice
    initialState: { count: 10 }, //init start value
    reducers: {
        add: (state) => {
            state.count++; // assign value when click will update count
        }
    }, // logic
    extraReducers: (builder => {
        //exception signUp service
        builder.addCase(signUp.fulfilled, (state,action)=> {
            state.count++;
        });
    }),
});

export default userSlice.reducer;
export const userSelector = (state: RootState) => state.userReducer;
export const { add } = userSlice.actions;