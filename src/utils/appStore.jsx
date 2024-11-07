import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/UserSlice"

const appStore=configureStore({
    reducer:{
        user:userReducer,
    }
})
export default appStore