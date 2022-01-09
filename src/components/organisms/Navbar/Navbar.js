import React, {useState} from 'react';
import {AccountWrapper, Container, UserData, Wrapper} from "./Navbar.elements";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import {Button} from "../../index";
import {ThemeContainer} from "../../../theme/ThemeContainer";

const Navbar = ({setOpenMenu}) => {
    const [navbar, setNavbar] = useState(false);

    const handleChangeBackground = () => {
        if (window.scrollY >= 70) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', handleChangeBackground);

    return (
        <Container isTransparent={navbar}>
            <ThemeContainer>
                <Wrapper>
                    <img src={`https://www.bsgroup.eu/wp-content/uploads/BSG-Logo-Inline-Biale-Litery-1.svg`}
                         alt={`logo`}/>
                    <AccountWrapper>
                        <Button secondary isSmall>Log out</Button>
                        <UserData>
                            <p>Patryk Orłowski</p>
                            <span>License: TRIAL</span>
                        </UserData>
                        <img src="/assets/images/1.jpg" alt="Avatar"/>
                    </AccountWrapper>
                    <AiOutlineMenu onClick={() => setOpenMenu(prevState => !prevState)}/>
                </Wrapper>
            </ThemeContainer>
        </Container>
    );
};

export default Navbar;