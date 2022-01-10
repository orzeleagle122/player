import React, {useEffect, useState} from 'react';
import {Navbar, VideoPlayer, Drawer, CarouselSlider, VideoCart} from "../../components";
import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getIsLogin} from "../../redux/slices/userSlice";
import {ThemeContainer} from "../../theme/ThemeContainer";
import {GridWrapper} from "./Main.elements";
import {
    getMediaRecommendedListAction,
    getMediaTopRatedListAction,
    getRecommendedMedias, getTopRatedMedias
} from "../../redux/slices/movieSlice";

const Main = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const isLogin = useSelector(getIsLogin);
    const dispatch = useDispatch();
    const getRecommendedMedia = useSelector(getRecommendedMedias);
    const getTopRatedMedia = useSelector(getTopRatedMedias);

    useEffect(() => {
        const token = localStorage.getItem("token");
        dispatch(getMediaTopRatedListAction(token));
        dispatch(getMediaRecommendedListAction(token));

    }, [dispatch])

    if (!isLogin) return <Navigate to={`/`}/>
    return (
        <div>
            <Navbar setOpenMenu={setOpenMenu}/>
            <Drawer openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            <ThemeContainer>
                <VideoPlayer/>
                <h1>Recommended for You</h1>
                <GridWrapper>
                    {getRecommendedMedia?.Entities?.map(item => <VideoCart key={item.Id} id={item.Id} title={item.Title}
                                                                           desc={item.Description} img={item.Images}/>)}
                </GridWrapper>
                <h1>Top Rated</h1>
                <GridWrapper>
                    {getTopRatedMedia?.Entities?.map(item => <VideoCart key={item.Id} id={item.Id} title={item.Title}
                                                                        desc={item.Description} img={item.Images}/>)}
                </GridWrapper>
                {/*<CarouselSlider/>*/}
            </ThemeContainer>

        </div>
    );
};

export default Main;