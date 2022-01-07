import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Login, Main} from "./pages";
import GlobalStyle from "./theme/global";

const App = () => {
    return (
        <Router>
            <GlobalStyle/>
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


