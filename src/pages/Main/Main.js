import React, {useState} from 'react';
import {Navbar, VideoPlayer} from "../../components";
// import CarouselSlider from "../../components/molecules/CarouselSlider/CarouselSlider";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getIsLogin} from "../../redux/account/userSlice";
import {Drawer, CloseMenuWrapper} from "./Main.elements";
import {CgClose} from "react-icons/cg";

const Main = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const isLogin = useSelector(getIsLogin);
    if (!isLogin) return <Navigate to={`/`}/>
    return (
        <div>
            <Navbar setOpenMenu={setOpenMenu}/>
            <Drawer openMenu={openMenu}>
                <CloseMenuWrapper>
                    <CgClose onClick={() => {
                        setOpenMenu(prevState => !prevState)
                    }}/>
                </CloseMenuWrapper>
                <div>

                </div>
            </Drawer>
            <VideoPlayer/>
            {/*<CarouselSlider/>*/}

        </div>
    );
};

export default Main;