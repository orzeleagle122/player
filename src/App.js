import './App.css';
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Login, Main, SplashScreen} from "./pages";
import {useDispatch, useSelector} from "react-redux";
import {getIsFetching, getIsLogin, keepLoginAction, setIsFetching} from "./redux/account/userSlice";

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


