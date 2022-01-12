import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {errorMessage} from "./movieSlice";

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
    streamPermission: '',
    isLogin: false,
    isFetching: true,
    isError: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            return {isLogin: true, isError: false, streamPermission: 'MAIN', ...action.payload}
        },
        continueAsGuest: (state, action) => {
            return {isLogin: true, isError: false, streamPermission: 'TRIAL', ...action.payload}
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
        },
        logOut: (state, action) => {
            return {AuthorizationToken: {}, User: {}, isLogin: false, isFetching: true, streamPermission: ''}
        }
    }
})

export const getIsLogin = state => state.user.isLogin;
export const getIsFetching = state => state.user.isFetching;
export const getIsError = state => state.user.isError;
export const getUserPermission = state => state.user.streamPermission;
export const getUser = state => state.user.User;

export const {
    userLogin,
    continueAsGuest,
    sendRequest,
    errorLogin,
    keepLogin,
    setIsFetching,
    logOut
} = userSlice.actions;

// actions
const APIURL = 'https://thebetter.bsgroup.eu';

export const userLoginAction = (Username, Password) => async (dispatch) => {
    return await axios.post(`${APIURL}/Authorization/SignIn`,
        {
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
        .then(response => {
            const {data} = response;
            dispatch(userLogin(data));
            localStorage.setItem("token", data.AuthorizationToken.Token);
            localStorage.setItem("refreshToken", data.AuthorizationToken.RefreshToken);
        })
        .catch(() => dispatch(errorLogin()));
}

export const continueAsGuestAction = () => async (dispatch) => {
    return await axios.post(`${APIURL}/Authorization/SignIn`,
        {
            Device: {
                PlatformCode: "WEB",
                Name: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
            }
        }, {
            headers: {
                'Content-Type': "application/json"
            }
        })
        .then(response => {
            const {data} = response;
            dispatch(continueAsGuest(data));
            localStorage.setItem("token", data.AuthorizationToken.Token);
        })
        .catch(() => dispatch(errorLogin()));
}

export const errorLoginAction = () => async (dispatch) => {
    dispatch(errorLogin());
}

export const keepLoginAction = (refreshToken) => async (dispatch) => {
    if (!refreshToken) {
        dispatch(setIsFetching(false));
        return;
    }
    const token = localStorage.getItem("token");
    await axios.post(`${APIURL}/Authorization/RefreshToken`,
        {
            Token: refreshToken,
            Device: {
                PlatformCode: "WEB",
                Name: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                FirebaseToken: "string",
                DpiCode: "string",
            }
        }, {
            headers: {
                'Content-Type': "application/json",
                'Authorization': `${token}`,
            }
        })
        .then(response => {
            const {data} = response
            dispatch(keepLogin(data))
        })
        .catch(error => {
            console.log({error});
        })
        .finally(() => dispatch(setIsFetching(false)))
}

export const logOutAction = () => async (dispatch) => {

    const token = localStorage.getItem("token");
    await axios.post(`${APIURL}/Authorization/SignOut`,
        {
            Name: "string",
            PlatformCode: "string",
            FirebaseToken: "string",
            DpiCode: "string"
        }, {
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => {
            dispatch(logOut());
            dispatch(errorMessage(''));
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('refreshToken');
        })
}


export default userSlice.reducer