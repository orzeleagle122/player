import React, {useState} from 'react';
import {Navbar, VideoPlayer} from "../../components";
// import CarouselSlider from "../../components/molecules/CarouselSlider/CarouselSlider";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getIsLogin} from "../../redux/account/userSlice";
import {Drawer, CloseMenuWrapper, CardContainer, Card, CardContent} from "./Main.elements";
import {CgClose} from "react-icons/cg";
import * as PropTypes from "prop-types";
import {FaPlay} from "react-icons/fa";

CardContent.propTypes = {children: PropTypes.node};
const Main = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const isLogin = useSelector(getIsLogin);
    if (!isLogin) return <Navigate to={`/`}/>
    return (
        <div>
            <Navbar setOpenMenu={setOpenMenu}/>
            <Drawer openMenu={openMenu}>
                <CloseMenuWrapper>
                    <p>Video list</p>
                    <CgClose onClick={() => {
                        setOpenMenu(prevState => !prevState)
                    }}/>
                </CloseMenuWrapper>
                <CardContainer>
                    <Card
                        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FlgotX8-9dX4%2Fmaxresdefault.jpg&f=1&nofb=1">
                        <FaPlay/>
                        <CardContent>
                            <h3>Tytuł</h3>
                            <p>Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu
                                Opis
                                filmu </p>
                        </CardContent>
                    </Card>
                    <Card
                        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FlgotX8-9dX4%2Fmaxresdefault.jpg&f=1&nofb=1">
                        <FaPlay/>
                        <CardContent>
                            <h3>Tytuł</h3>
                            <p>Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu
                                Opis
                                filmu </p>
                        </CardContent>
                    </Card>
                    <Card
                        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FlgotX8-9dX4%2Fmaxresdefault.jpg&f=1&nofb=1">
                        <FaPlay/>
                        <CardContent>
                            <h3>Tytuł</h3>
                            <p>Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu Opis filmu
                                Opis
                                filmu </p>
                        </CardContent>
                    </Card>

                </CardContainer>
            </Drawer>
            <VideoPlayer/>
            {/*<CarouselSlider/>*/}


        </div>
    );
};

export default Main;