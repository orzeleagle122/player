import './App.css';
import React, {FC, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Login, Main, SplashScreen} from "./pages";
import {getIsFetching, getIsLogin, keepLoginAction} from "./redux/slices/userSlice";
import {useAppDispatch, useAppSelector} from "./store";

const App: FC = () => {
    const dispatch = useAppDispatch();
    const isLogin = useAppSelector(getIsLogin);
    const isFetching = useAppSelector(getIsFetching);

    useEffect(() => {
        const refreshToken = localStorage.getItem("refreshToken");
        dispatch(keepLoginAction(refreshToken));
    }, [isLogin, dispatch])

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


