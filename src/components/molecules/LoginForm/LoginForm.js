import React, {useState} from 'react';
import {useFormik} from "formik";
import {getIsError, userLoginAction} from "../../../redux/slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {Button, Input} from "../../index";
import {FormWrapper} from "./LoginForm.elements";

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const isError = useSelector(getIsError);
    const formik = useFormik({
        initialValues: {
            email: 'test@bsgroup.eu',
            password: 'Test12!@',
        },
        onSubmit: (values) => {
            setIsLoading(true);
            dispatch(userLoginAction(values.email, values.password))
                .finally(() => setIsLoading(false));
        },
    });

    return (
        <FormWrapper>
            <form onSubmit={formik.handleSubmit}>
                {isError && <p>Something went wrong...</p>}
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
                <Button type="submit" disabled={isLoading}>
                    {isLoading
                        ? <><img src={`/assets/images/blue-loading-gif-transparent.gif`} width={`20px`} alt={`loader`}
                                 alr={`loader`}/> Logging in</>
                        : "Log in"
                    }
                </Button>

            </form>
        </FormWrapper>
    );
};

export default LoginForm;