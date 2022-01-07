import React from 'react';
import ReactPlayer from 'react-player'
import axios from 'axios';
import {Container} from "./VideoPlayer.elements";

const VideoPlayer = () => {

    const getVideo = () => {
        return null
    }

    return (
        <Container>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true}/>
        </Container>
    );
};

export default VideoPlayer;