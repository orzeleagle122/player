import React from 'react';
import {CgClose} from "react-icons/cg";
import {DrawerContainer, CloseMenuWrapper, Container, ProfileContainer, ProfileInformation} from "./Drawer.elements";
import {Button} from "../../index";
import {BsGear} from "react-icons/bs";

const Drawer = ({openMenu, setOpenMenu}) => {
    return (
        <Container openMenu={openMenu}>
            <CloseMenuWrapper>
                <p>My profile</p>
                <CgClose onClick={() => {
                    setOpenMenu(prevState => !prevState)
                }}/>
            </CloseMenuWrapper>
            <DrawerContainer>
                <ProfileContainer>
                    <ProfileInformation>
                        <img src="/assets/images/1.jpg" alt="Avatar"/>
                        <div>
                            <h4>Patryk Orłowski</h4>
                            <p>License: TRIAL</p>
                        </div>
                    </ProfileInformation>
                    <BsGear onClick={() => alert('user settings page')}/>
                </ProfileContainer>
                <Button isSmall secondary>Logout</Button>
            </DrawerContainer>
        </Container>
    );
};

export default Drawer;