import React, {useState} from 'react';
import {Container, Wrapper} from "./Navbar.elements";

const Navbar = () => {

    const [navbar,setNavbar]=useState(false);

    const handleChangeBackground=()=>{
        if(window.scrollY>=70){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }
    window.addEventListener('scroll',handleChangeBackground);

    return (
        <Container isTransparent={navbar}>
            <Wrapper>
                <img src={`https://www.bsgroup.eu/wp-content/uploads/BSG-Logo-Inline-Biale-Litery-1.svg`} alt={`logo`}/>
                <div>menu</div>
                <div>account</div>
            </Wrapper>
        </Container>
    );
};

export default Navbar;