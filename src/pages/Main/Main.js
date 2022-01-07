import React from 'react';
import {Navbar, VideoPlayer} from "../../components";
import CarouselSlider from "../../components/molecules/CarouselSlider/CarouselSlider";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getUserInformation} from "../../redux/account/userSlice";

const Main = () => {
    const isLogin = useSelector(getUserInformation);
    if (!isLogin) return <Navigate to={`/`}/>
    return (
        <div>
            <Navbar/>
            <VideoPlayer/>
            <CarouselSlider/>

        </div>
    );
};

export default Main;