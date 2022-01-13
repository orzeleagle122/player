import React, {useEffect, useState} from 'react';
import {Navbar, VideoPlayer, Drawer, CarouselSlider, VideoCart, Footer, Loader} from "../../components";
import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getIsLogin} from "../../redux/slices/userSlice";
import {ThemeContainer} from "../../theme/ThemeContainer";
import {GridWrapper, Wrapper} from "./Main.elements";
import {
    getMediaRecommendedListAction,
    getMediaTopRatedListAction,
    getRecommendedMedias, getTopRatedMedias
} from "../../redux/slices/movieSlice";
import {useAppDispatch} from "../../store";
import {number} from "yup";

interface IItem {
    id: number,
    title: string,
    img: []
}

const Main = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const isLogin = useSelector(getIsLogin);
    const dispatch = useAppDispatch();
    const getRecommendedMedia = useSelector(getRecommendedMedias);
    const getTopRatedMedia = useSelector(getTopRatedMedias);
    const [isLoadingRecommended, setIsLoadingRecommended] = useState(true);
    const [isLoadingTopRated, setIsLoadingTopRated] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(getMediaTopRatedListAction(token)).finally(() => setIsLoadingRecommended(false));
            dispatch(getMediaRecommendedListAction(token)).finally(() => setIsLoadingTopRated(false));
        }
    }, [dispatch])

    if (!isLogin) return <Navigate to={`/`}/>
    return (
        <>
            <Navbar setOpenMenu={setOpenMenu}/>
            <Drawer openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            <ThemeContainer>
                <VideoPlayer/>
                <Wrapper>
                    <h1>Recommended for You</h1>
                    <GridWrapper>
                        {isLoadingRecommended ?
                            <Loader/> : getRecommendedMedia?.Entities?.map((item: { Id: number; Title: string; Images: [{ ImageTypeCode: string; Url: string; }]; }) =>
                                <VideoCart
                                    key={item.Id} id={item.Id}
                                    title={item.Title}
                                    img={item.Images}/>)}

                    </GridWrapper>
                    <h1>Top Rated</h1>
                    <GridWrapper>
                        {isLoadingTopRated ?
                            <Loader/> : getTopRatedMedia?.Entities?.map((item: { Id: number; Title: string; Images: [{ ImageTypeCode: string; Url: string; }]; }) =>
                                <VideoCart
                                    key={item.Id} id={item.Id}
                                    title={item.Title}
                                    img={item.Images}/>)}
                    </GridWrapper>
                    {/*<CarouselSlider/>*/}
                </Wrapper>

            </ThemeContainer>
            <Footer/>
        </>
    );
};

export default Main;