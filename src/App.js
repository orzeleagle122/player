import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import {Login, Main, SplashScreen} from "./pages";
import {useDispatch, useSelector} from "react-redux";
import {getIsFetching, getIsLogin, keepLoginAction} from "./redux/account/userSlice";
import Template from "./template/Template";
import {Drawer, Navbar} from "./components";

const App = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector(getIsLogin);
    const isFetching = useSelector(getIsFetching);

    useEffect(() => {
        const token = localStorage.getItem("token");
        dispatch(keepLoginAction(token));
    }, [isLogin])

    if (isFetching) return <SplashScreen/>

    return (
        <Router>
            <Template>
                <Routes>
                    <Route path={"/main"} element={<Main/>}/>
                </Routes>
            </Template>
            <Routes>
                <Route path={"/"} element={<Login/>}/>
            </Routes>
        </Router>
    );
};

export default App;


