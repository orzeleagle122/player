import React from 'react';
import {useFormik} from "formik";
import {getIsError, getIsFetching, sendRequest, userLoginAction} from "../../../redux/account/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {Button, Input} from "../../index";
import {FormWrapper} from "./LoginForm.elements";

const LoginForm = () => {
    const dispatch = useDispatch();
    const isFetching = useSelector(getIsFetching);
    const isError = useSelector(getIsError);
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

    return (
        <FormWrapper>
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
        </FormWrapper>
    );
};

export default LoginForm;