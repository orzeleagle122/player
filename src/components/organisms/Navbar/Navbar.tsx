import React, {FC} from 'react';
import {AccountWrapper, Container, UserData, Wrapper} from "./Navbar.elements";
import {NavbarContainer} from "../../../theme/NavbarContainer";
import {useSelector} from "react-redux";
import {getUser} from "../../../redux/slices/userSlice";
import PropTypes from 'prop-types';

interface INavbar<T> {
    setOpenMenu: (cb: (value: T) => T) => void;
}

const Navbar: FC<INavbar<boolean>> = ({setOpenMenu}) => {
    const userData = useSelector(getUser);
    return (
        <Container>
            <NavbarContainer>
                <Wrapper>
                    <img src={`https://www.bsgroup.eu/wp-content/uploads/BSG-Logo-Inline-Biale-Litery-1.svg`}
                         alt={`logo`}/>
                    <AccountWrapper onClick={() => setOpenMenu(prevState => !prevState)}>
                        <UserData>
                            <p>{userData.FullName}</p>
                            <span>{userData.Email}</span>
                        </UserData>
                        <img src="/assets/images/1.jpg" alt="Avatar"/>
                    </AccountWrapper>
                </Wrapper>
            </NavbarContainer>
        </Container>
    );
};

Navbar.propTypes = {
    setOpenMenu: PropTypes.func.isRequired,
}

export default Navbar;