import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    AuthorizationToken: {
        RefreshToken: "",
        Token: "",
        TokenExpires: "",
    },
    User: {
        ClientRoles: [],
        Email: "",
        FullName: "",
        Id: 0,
        Initials: "",
        Products: [],
    },
    isLogin: true,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            console.log(action);
        },
        continueAsGuest: (state, action) => {

        }
    }
})

export const getUserInformation = state => state.user.isLogin;

// actions
// export const userLoginaction=(initialState)=>async (dispatch)=>{
//
// }

export const {userLogin} = userSlice.actions;

export default userSlice.reducer