import React, {useState} from 'react';
import {Navbar, VideoPlayer, Drawer, CarouselSlider} from "../../components";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getIsLogin} from "../../redux/account/userSlice";
import {ThemeContainer} from "../../theme/ThemeContainer";

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
            </ThemeContainer>
            {/*<CarouselSlider/>*/}
        </div>
    );
};

export default Main;