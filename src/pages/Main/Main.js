import React, {useState} from 'react';
import {Navbar, VideoPlayer, Drawer, CarouselSlider, VideoCart} from "../../components";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getIsLogin} from "../../redux/account/userSlice";
import {ThemeContainer} from "../../theme/ThemeContainer";
import {GridWrapper} from "./Main.elements";

const Main = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const isLogin = useSelector(getIsLogin);
    if (!isLogin) return <Navigate to={`/`}/>
    return (
        <div>
            <Navbar setOpenMenu={setOpenMenu}/>
            <Drawer openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            <ThemeContainer>
                <VideoPlayer/>
                <h1>Recommended for You</h1>
                <GridWrapper>
                    <VideoCart/>
                    <VideoCart/>
                    <VideoCart/>
                    <VideoCart/>
                    <VideoCart/>
                    <VideoCart/>
                    <VideoCart/>
                    <VideoCart/>
                    <VideoCart/>
                    <VideoCart/>
                </GridWrapper>
                <h1>Top Rated</h1>
                <GridWrapper>
                    <VideoCart/>
                    <VideoCart/>
                    <VideoCart/>
                    <VideoCart/>
                    <VideoCart/>
                    <VideoCart/>
                    <VideoCart/>
                    <VideoCart/>
                    <VideoCart/>
                </GridWrapper>
            </ThemeContainer>
            {/*<CarouselSlider/>*/}
        </div>
    );
};

export default Main;