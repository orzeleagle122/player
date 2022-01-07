import {configureStore} from "@reduxjs/toolkit";
import user from '../redux/account/userSlice';

export const store = configureStore({
    reducer: {
        user,
    },
})