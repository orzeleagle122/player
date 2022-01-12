import {configureStore} from "@reduxjs/toolkit";
import user from '../redux/slices/userSlice';
import movie from '../redux/slices/movieSlice'

export const store = configureStore({
    reducer: {
        user,
        movie
    },
})