import React from 'react';
import {VideoPlayer} from "../../components";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getIsLogin} from "../../redux/account/userSlice";

const Main = () => {
    const isLogin = useSelector(getIsLogin);
    if (!isLogin) return <Navigate to={`/`}/>
    return (
        <div>

            <VideoPlayer/>
            {/*<CarouselSlider/>*/}
        </div>
    );
};

export default Main;