"use client";
import {Provider} from "react-redux";
import {store} from "@/store/store"; //start path from root app
import React from "react";

export default function ReduxProvider({
    children,
}:{
    children: React.ReactNode;
}){
    return <Provider store={store}>{children}</Provider>
}