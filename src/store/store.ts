import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userReducer from "@/store/slices/userSlice"; 

const reducer = { userReducer }; //register userSlice

//use store for share all values in project Example share values between header and body
export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV === 'development', //Protect Log when env Production
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch= ()=> useDispatch<AppDispatch>();