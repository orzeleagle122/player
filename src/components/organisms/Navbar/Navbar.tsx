import React, {FC} from 'react';
import {AccountWrapper, Container, UserData, Wrapper} from "./Navbar.elements";
import {NavbarContainer} from "../../../theme/NavbarContainer";
import {getUser} from "../../../redux/slices/userSlice";
import {useAppSelector} from "../../../store";

interface INavbar<T> {
    setOpenMenu: (cb: (value: T) => T) => void;
}

const Navbar: FC<INavbar<boolean>> = ({setOpenMenu}) => {
    const userData = useAppSelector(getUser);
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

export default Navbar;