import React from 'react';
import ReactPlayer from 'react-player'
import {Container} from "./VideoPlayer.elements";
import useScrollPosition from "../../../hooks/useScrollPosition";
import {useSelector} from "react-redux";
import {getCurrentVideo, getErrorMessage} from "../../../redux/slices/movieSlice";

const VideoPlayer = () => {
    const scrollPosition = useScrollPosition();
    const currentVideo = useSelector(getCurrentVideo);
    const errorMessage = useSelector(getErrorMessage);

    return (
        <Container>
            <ReactPlayer
                url={currentVideo.ContentUrl}
                playing={true}
                controls={true} width={`100%`}
                pip={scrollPosition >= 300}
                height="auto"/>
            <h2>{errorMessage}</h2>
            <br/>
            <br/>
            <h1>{currentVideo.Title}</h1>
            <p>
                {currentVideo.Description}
            </p>
        </Container>
    );
};

export default VideoPlayer;