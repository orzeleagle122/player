import React from 'react';
import {FaPlay} from "react-icons/fa";
import {Card, CardContent} from "./VideoCart.elements";
import {useDispatch, useSelector} from "react-redux";
import {getMediaPlayInfoAction} from "../../../redux/slices/movieSlice";
import {getUserPermission} from "../../../redux/slices/userSlice";

const VideoCart = ({title, desc, img, id}) => {

    const dispatch = useDispatch();
    const permission = useSelector(getUserPermission);

    const frameImg = img.filter(image => image.ImageTypeCode === "FRAME" ? image.Url : false);

    return (
        <Card
            onClick={() => {
                dispatch(getMediaPlayInfoAction(id, permission));
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }}
            image={frameImg[0].Url ? frameImg[0].Url : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FlgotX8-9dX4%2Fmaxresdefault.jpg&f=1&nofb=1"}>
            <FaPlay/>
            <CardContent>
                <h3>{title}</h3>
                {/*<p>{desc}</p>*/}
            </CardContent>
        </Card>
    );
};

export default VideoCart;