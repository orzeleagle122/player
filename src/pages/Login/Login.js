import React, {useEffect} from 'react';
import {Container, Wrapper, ButtonsWrapper, LogoWrapper} from "./Login.elements";
import {Button, Input, SocialButton} from "../../components";
import {continueAsGuest, login} from "../../api/login";
import {Formik, Field, Form, useFormik} from 'formik';
import {Link, Navigate} from "react-router-dom";
import axios from 'axios';
import {getUserInformation} from "../../redux/account/userSlice";
import {useSelector} from "react-redux";
import {AiFillFacebook, AiFillApple} from "react-icons/ai";

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            login(values.email, values.password)
            // .finally(() => console.log('elo'));
        },
    });

    const isLogin = useSelector(getUserInformation);

    if (isLogin) return <Navigate to={`/main`}/>


    return (
        <Container>
            <Wrapper>
                <LogoWrapper>
                    <img src={`https://www.bsgroup.eu/wp-content/uploads/BSG-Logo-Inline-Biale-Litery-1.svg`}
                         alt={`logo`}/>
                    <h3>Sign up</h3>
                </LogoWrapper>

                <SocialButton apple onClick={()=>alert('only for demonstration')}> <AiFillApple/> Sign up with apple</SocialButton>
                <SocialButton facebook onClick={()=>alert('only for demonstration')}><AiFillFacebook/> Sign up with facebook</SocialButton>

                <h1>Welcome to movie player!</h1>

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
                    <Button type="submit">Log in</Button>
                </form>
                <ButtonsWrapper>
                    <Button>Register</Button>
                    <Button isGrey isBig onClick={continueAsGuest}>Continue as guest</Button>
                </ButtonsWrapper>


            </Wrapper>
        </Container>
    );
};

export default Login;