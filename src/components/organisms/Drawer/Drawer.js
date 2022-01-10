import React from 'react';
import {CgClose} from "react-icons/cg";
import {DrawerContainer, CloseMenuWrapper, Container, ProfileContainer, ProfileInformation} from "./Drawer.elements";
import {Button} from "../../index";
import {BsGear} from "react-icons/bs";
import {useSelector, useDispatch} from "react-redux";
import {getUser, logOutAction} from "../../../redux/slices/userSlice";

const Drawer = ({openMenu, setOpenMenu}) => {
    const userData = useSelector(getUser);
    const dispatch = useDispatch();
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
                            <h4>{userData.FullName}</h4>
                            <p>{userData.Email}</p>
                        </div>
                    </ProfileInformation>
                    <BsGear onClick={() => alert('user settings page')}/>
                </ProfileContainer>
                <Button isSmall secondary onClick={() => dispatch(logOutAction())}>Logout</Button>
            </DrawerContainer>
        </Container>
    );
};

export default Drawer;