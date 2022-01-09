import React, {useState} from 'react';
import {TemplateContainer, Wrapper} from "./Template.elements";
import {Drawer, Navbar} from "../components";
import {useLocation} from "react-router-dom";


const Template = ({children}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const location = useLocation();
    console.log(location.pathname);
    return (
        <>
            {location.pathname !== "/" && <>
                <Navbar setOpenMenu={setOpenMenu}/>
                <Drawer openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            </>}

            <TemplateContainer>
                <Wrapper>
                    {children}
                </Wrapper>

            </TemplateContainer>
        </>
    );
};

export default Template;