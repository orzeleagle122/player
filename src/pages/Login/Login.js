import React, {useEffect} from 'react';
import {Container, Wrapper, ButtonsWrapper} from "./Login.elements";
import {Button, Input} from "../../components";
import {login} from "../../api/login";
import {Formik, Field, Form, useFormik} from 'formik';
import * as yup from 'yup';
import {Link} from "react-router-dom";

const Login = () => {

    const validationSchema = yup.object({
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            password: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('test')
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <Container>
            <Wrapper>
                {/*<h1>Welcome guest!</h1>*/}
                {/*<label htmlFor={`email`}>Email</label>*/}
                {/*<Input id={`email`} type={`email`}/>*/}
                {/*<label htmlFor={`password`}>password</label>*/}
                {/*<Input id={`password`} type={`password`} placeholder={`test`}/>*/}

                {/*<ButtonsWrapper>*/}
                {/*    <Button>Log in</Button>*/}
                {/*    <Button>Register</Button>*/}
                {/*    <Button>Continue as guest</Button>*/}
                {/*</ButtonsWrapper>*/}


                <form onSubmit={formik.handleSubmit}>

                    <Input
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <Input
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button type="submit">Submit</Button>
                </form>
                <Button>Register</Button>
                <Button><Link to={"/main"}>Continue as guest</Link></Button>


            </Wrapper>
        </Container>
    );
};

export default Login;