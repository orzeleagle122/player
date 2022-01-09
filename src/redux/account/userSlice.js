import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
// TODO: utrzymać zalogowanie po refrashu

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
    isLogin: false,
    isFetching: false,
    isError: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            return {...state, isLogin: true}
        },
        continueAsGuest: (state, action) => {

        },
        sendRequest: (state) => {
            console.log("jestem tutaj?")
            return {...state, isFetching: true, isError: false}
        },
        errorLogin: (state) => {
            return {...state, isFetching: false, isLogin: false, isError: true}
        }
    }
})

export const getIsLogin = state => state.user.isLogin;
export const getIsFetching = state => state.user.isFetching;
export const getIsError = state => state.user.isError;
export const {userLogin, continueAsGuest, sendRequest, errorLogin} = userSlice.actions;

// actions
const APIURL = 'https://thebetter.bsgroup.eu';

export const userLoginAction = (Username, Password) => async (dispatch) => {
    try {
        const response = await axios.post(`${APIURL}/Authorization/SignIn`, {
            Username,
            Password,
            Device: {
                PlatformCode: "WEB",
                Name: "7a6a86e5-356f-4795-8998-305e1b205531"
            }
        }, {
            headers: {
                'Content-Type': "application/json"
            }
        })
        console.log(response);
        dispatch(userLogin(response))
    } catch (err) {
        dispatch(errorLoginAction());
    }
}

export const continueAsGuestAction = () => {

}

export const errorLoginAction = () => async (dispatch) => {
    dispatch(errorLogin());
}


export default userSlice.reducer