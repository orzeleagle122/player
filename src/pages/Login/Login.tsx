import React, {useEffect, useState} from 'react';
import {Container, Wrapper, ButtonsWrapper, LogoWrapper, Separator} from "./Login.elements";
import {Button, SocialButton, LoginForm} from "../../components";
import {Navigate} from "react-router-dom";
import {
    continueAsGuestAction,
    getIsLogin
} from "../../redux/slices/userSlice";
import {AiFillFacebook, AiFillApple} from "react-icons/ai";
import {useAppDispatch, useAppSelector} from "../../store";

const Login = () => {

    const dispatch = useAppDispatch();
    const isLogin = useAppSelector(getIsLogin);

    const [isLoading, setIsLoading] = useState(false)

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

                <SocialButton apple={true} onClick={() => alert('only for demonstration')}><><AiFillApple/> Sign up with
                    apple
                </>
                </SocialButton>
                <SocialButton facebook onClick={() => alert('only for demonstration')}><><AiFillFacebook/> Sign up with
                    facebook
                </>
                </SocialButton>

                <Separator>
                    <hr/>
                    or
                    <hr/>
                </Separator>

                <h2>Login with credentials</h2>
                <LoginForm/>

                <ButtonsWrapper>
                    <Button onClick={() => {
                        alert("not required in the task")
                    }}>Register</Button>
                    <Button secondary isBig onClick={() => {
                        setIsLoading(true);
                        dispatch(continueAsGuestAction()).finally(() => setIsLoading(false))
                    }
                    }>
                        {isLoading
                            ? <><img src={`/assets/images/blue-loading-gif-transparent.gif`} width={`20px`}
                                     alt={`loader`}/> Logging as
                                guest</>
                            : "Continue as guest"
                        }
                    </Button>
                </ButtonsWrapper>

            </Wrapper>
        </Container>
    );
};

export default Login;