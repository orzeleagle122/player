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
            <ReactPlayer url='https://img-9gag-fun.9cache.com/photo/aggXOWv_460svav1.mp4' controls={true} width={`100%`}
                         height={`100vh`}/>
        </Container>
    );
};

export default VideoPlayer;