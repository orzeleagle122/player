import React, {useState} from 'react';
import {Navbar, VideoPlayer, VideoCart, Drawer} from "../../components";
// import CarouselSlider from "../../components/molecules/CarouselSlider/CarouselSlider";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getIsLogin} from "../../redux/account/userSlice";

const Main = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const isLogin = useSelector(getIsLogin);
    if (!isLogin) return <Navigate to={`/`}/>
    return (
        <div>
            <Navbar setOpenMenu={setOpenMenu}/>
            <Drawer openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            <VideoPlayer/>
            {/*<CarouselSlider/>*/}


        </div>
    );
};

export default Main;