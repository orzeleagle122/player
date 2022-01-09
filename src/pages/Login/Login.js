import React, {useEffect} from 'react';
import {Container, Wrapper, ButtonsWrapper, LogoWrapper, Separator} from "./Login.elements";
import {Button, SocialButton, LoginForm} from "../../components";
import {Navigate} from "react-router-dom";
import {
    continueAsGuestAction,
    errorLoginAction,
    getIsError,
    getIsFetching,
    getIsLogin, keepLoginAction,
    sendRequest,
    userLoginAction
} from "../../redux/account/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {AiFillFacebook, AiFillApple} from "react-icons/ai";

const Login = () => {

    const dispatch = useDispatch();
    const isLogin = useSelector(getIsLogin);

    useEffect(() => {

    }, [isLogin])

    if (isLogin) return <Navigate to={`/main`}/>


    return (
        <Container>
            <Wrapper>
                <LogoWrapper>
                    <img src={`https://www.bsgroup.eu/wp-content/uploads/BSG-Logo-Inline-Biale-Litery-1.svg`}
                         alt={`logo`}/>
                    <h3>Welcome to Player!</h3>
                </LogoWrapper>

                <SocialButton apple onClick={() => alert('only for demonstration')}> <AiFillApple/> Sign up with
                    apple</SocialButton>
                <SocialButton facebook onClick={() => alert('only for demonstration')}><AiFillFacebook/> Sign up with
                    facebook</SocialButton>

                <Separator>
                    <hr/>
                    or
                    <hr/>
                </Separator>

                <h2>Login with credentials</h2>
                <LoginForm/>

                <ButtonsWrapper>
                    <Button onClick={() => {
                    }}>Register</Button>
                    <Button secondary isBig onClick={() => dispatch(continueAsGuestAction())}>Continue as guest</Button>
                </ButtonsWrapper>

            </Wrapper>
        </Container>
    );
};

export default Login;