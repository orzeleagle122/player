import React from 'react';
import {CgClose} from "react-icons/cg";
import {VideoCart} from "../../index";
import {CardContainer, CloseMenuWrapper, Container} from "./Drawer.elements";

const Drawer = ({openMenu,setOpenMenu}) => {
    return (
        <Container openMenu={openMenu}>
            <CloseMenuWrapper>
                <p>Video list</p>
                <CgClose onClick={() => {
                    setOpenMenu(prevState => !prevState)
                }}/>
            </CloseMenuWrapper>
            <CardContainer>
                <VideoCart/>
            </CardContainer>
        </Container>
    );
};

export default Drawer;