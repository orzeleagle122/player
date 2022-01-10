import './App.css';
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Login, Main, SplashScreen} from "./pages";
import {useDispatch, useSelector} from "react-redux";
import {getIsFetching, getIsLogin, keepLoginAction} from "./redux/slices/userSlice";

const App = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector(getIsLogin);
    const isFetching = useSelector(getIsFetching);

    useEffect(() => {
        const refreshToken = localStorage.getItem("refreshToken");
        dispatch(keepLoginAction(refreshToken));
    }, [isLogin,dispatch])

    if (isFetching) return <SplashScreen/>

    return (
        <Router>
            <div>
                <Routes>
                    <Route path={"/"} element={<Login/>}/>
                    <Route path={"/main"} element={<Main/>}/>
                </Routes>

            </div>
        </Router>
    );
};

export default App;


