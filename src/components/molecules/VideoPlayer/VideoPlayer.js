import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player'
import {Container, GridWrapper} from "./VideoPlayer.elements";
import {VideoCart} from "../../index";
import useScrollPosition from "../../../hooks/useScrollPosition";

const VideoPlayer = () => {
    const scrollPosition = useScrollPosition();


    return (
        <Container>
            <ReactPlayer
                url='https://cdn.videvo.net/videvo_files/video/free/2020-05/large_watermarked/3d_ocean_1590675653_preview.mp4'
                controls={true} width={`100%`}
                pip={scrollPosition >= 300}
                height="auto"/>
            <br/>
            <br/>
            <h1>Tytuł filmu</h1>
            <p>
                Praesent placerat egestas faucibus. Cras vehicula, libero vestibulum volutpat finibus, nibh magna
                gravida
                velit, eget mollis ligula lorem convallis urna. Sed a posuere augue, non commodo massa. Curabitur
                eleifend ullamcorper odio, non posuere sapien imperdiet gravida. Quisque sed nulla nec lorem cursus
                iaculis ac in justo. Aliquam sed suscipit elit. Sed viverra dictum tortor quis dapibus. Nulla dui
                lectus, tristique nec erat a, scelerisque pellentesque mi. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nullam ultrices faucibus tellus, vitae aliquet nisi aliquam sed. Integer ornare, lectus
                vel maximus molestie, orci ante ornare risus, ac eleifend ligula massa porta lacus. Curabitur eget lacus
                in tellus commodo hendrerit id vitae turpis. Vestibulum sit amet mollis urna, eu finibus magna. Aenean
                fermentum ac mauris non congue. Pellentesque vel purus lorem.Praesent placerat egestas faucibus. Cras
                vehicula, libero vestibulum volutpat finibus, nibh magna gravida
                velit, eget mollis ligula lorem convallis urna. Sed a posuere augue, non commodo massa. Curabitur
                eleifend ullamcorper odio, non posuere sapien imperdiet gravida. Quisque sed nulla nec lorem cursus
                iaculis ac in justo. Aliquam sed suscipit elit. Sed viverra dictum tortor quis dapibus. Nulla dui
                lectus, tristique nec erat a, scelerisque pellentesque mi. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nullam ultrices faucibus tellus, vitae aliquet nisi aliquam sed. Integer ornare, lectus
                vel maximus molestie, orci ante ornare risus, ac eleifend ligula massa porta lacus. Curabitur eget lacus
                in tellus commodo hendrerit id vitae turpis. Vestibulum sit amet mollis urna, eu finibus magna. Aenean
                fermentum ac mauris non congue. Pellentesque vel purus lorem.Praesent placerat egestas faucibus. Cras
                vehicula, libero vestibulum volutpat finibus, nibh magna gravida
            </p>
        </Container>
    );
};

export default VideoPlayer;