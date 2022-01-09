import React from 'react';
import {FaPlay} from "react-icons/fa";
import {Card, CardContent} from "./VideoCart.elements";

const VideoCart = () => {
    return (
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
    );
};

export default VideoCart;