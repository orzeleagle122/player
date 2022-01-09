import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
// TODO: utrzymać zalogowanie po refrashu
//TODO: logout
// TODO: Zmiana try catch na promise

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
    isFetching: true,
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
            return {...state, isLogin: true}
        },
        sendRequest: (state) => {
            return {...state, isError: false}
        },
        errorLogin: (state) => {
            return {...state, isFetching: false, isLogin: false, isError: true}
        },
        keepLogin: (state, action) => {
            return {...state, isLogin: true, isFetching: false}
        },
        setIsFetching: (state, action) => {
            state.isFetching = action.payload;
        }
    }
})

export const getIsLogin = state => state.user.isLogin;
export const getIsFetching = state => state.user.isFetching;
export const getIsError = state => state.user.isError;

export const {userLogin, continueAsGuest, sendRequest, errorLogin, keepLogin, setIsFetching} = userSlice.actions;

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
        });
        console.log(response);
        dispatch(userLogin(response));
        localStorage.setItem("token", "TOKEN Z REPONSE");
        return response;
    } catch (err) {
        dispatch(errorLoginAction());
        return Promise.reject(err);
    }
}

export const continueAsGuestAction = () => async (dispatch) => {
    try {
        const response = await axios.post(`${APIURL}/Authorization/SignIn`, {
            Device: {
                PlatformCode: "WEB",
                Name: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
            }
        }, {
            headers: {
                'Content-Type': "application/json"
            }
        })
        console.log(response);
        dispatch(userLogin(response))
    } catch (err) {
        dispatch(errorLogin());
    }
}

export const errorLoginAction = () => async (dispatch) => {
    dispatch(errorLogin());
}

export const keepLoginAction = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("no token");

        const response = await axios.post(`${APIURL}/Authorization/xxxxxxxxxxxxxxxxx`, {
            Device: {
                PlatformCode: "WEB",
                Name: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
            }
        }, {
            headers: {
                'Content-Type': "application/json"
            }
        })
        console.log(response);
        dispatch(keepLogin(response))
    } catch (err) {
        console.log(err);
        dispatch(setIsFetching(false));
    }
}


export default userSlice.reducer