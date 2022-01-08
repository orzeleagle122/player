import React from 'react';
import {Container, Wrapper, ButtonsWrapper, LogoWrapper, Separator} from "./Login.elements";
import {Button, Input, SocialButton} from "../../components";
import {continueAsGuest, login} from "../../api/login";
import {Navigate} from "react-router-dom";
import {
    errorLoginAction,
    getIsError,
    getIsFetching,
    getIsLogin,
    sendRequest,
    userLoginAction
} from "../../redux/account/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {AiFillFacebook, AiFillApple} from "react-icons/ai";
import {useFormik} from "formik";

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            dispatch(sendRequest());
            dispatch(userLoginAction(values.email, values.password));
        },
    });
    const dispatch = useDispatch();
    const isLogin = useSelector(getIsLogin);
    const isFetching = useSelector(getIsFetching);
    const isError = useSelector(getIsError);

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

                <form onSubmit={formik.handleSubmit}>

                    <Input
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder={`Account email`}
                    />
                    <Input
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        placeholder={`password`}
                    />
                    <Button type="submit" disabled={isFetching}>Log in</Button>
                    {isFetching && "Logging..."}
                    {isError && "Something went wrong..."}
                </form>
                <ButtonsWrapper>
                    <Button onClick={() => errorLoginAction()}>Register</Button>
                    <Button isGrey isBig onClick={continueAsGuest}>Continue as guest</Button>
                </ButtonsWrapper>


            </Wrapper>
        </Container>
    );
};

export default Login;