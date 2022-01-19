import React from 'react';
import ReactPlayer from 'react-player'
import {Container} from "./VideoPlayer.elements";
import useScrollPosition from "../../../hooks/useScrollPosition";
import {getCurrentVideo, getErrorMessage} from "../../../redux/slices/movieSlice";
import {useAppSelector} from "../../../store";

const VideoPlayer = () => {
    const scrollPosition = useScrollPosition();
    const currentVideo = useAppSelector(getCurrentVideo);
    const errorMessage = useAppSelector(getErrorMessage);

    return (
        <Container>
            asd
            test
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