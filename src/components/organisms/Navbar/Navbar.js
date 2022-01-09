import React, {useState} from 'react';
import {AccountWrapper, Container, UserData, Wrapper} from "./Navbar.elements";
import {AiOutlineMenu} from "react-icons/ai";
import {Button} from "../../index";
import {NavbarContainer} from "../../../theme/NavbarContainer";
import useScrollPosition from "../../../hooks/useScrollPosition";

const Navbar = ({setOpenMenu}) => {
    return (
        <Container>
            <NavbarContainer>
                <Wrapper>
                    <img src={`https://www.bsgroup.eu/wp-content/uploads/BSG-Logo-Inline-Biale-Litery-1.svg`}
                         alt={`logo`}/>
                    <AccountWrapper onClick={() => setOpenMenu(prevState => !prevState)}>
                        <UserData>
                            <p>Patryk Orłowski</p>
                            <span>License: TRIAL</span>
                        </UserData>
                        <img src="/assets/images/1.jpg" alt="Avatar"/>
                    </AccountWrapper>
                </Wrapper>
            </NavbarContainer>
        </Container>
    );
};

export default Navbar;