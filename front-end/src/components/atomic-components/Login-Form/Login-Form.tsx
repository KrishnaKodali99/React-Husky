import React from 'react'
import { useFormik } from 'formik';

const validate = (values:any) => {
    const errors = {
        email: '',
        password: ''
    };

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if(!values.password){
        errors.password = 'Required';
    }else if (!(values.password.length < 15 && values.password.length > 8)) {
        errors.password = 'Must be between 8 and 15 characters';
    }

    if(errors.email === "" && errors.password === "")return {};
    return errors;
};

const LoginForm:React.FC<{loginSubmitHandler:Function}> = ({loginSubmitHandler}) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: (values:any, {resetForm}):any => {
            loginSubmitHandler(values)
            resetForm();
        },
    });
    return (

        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col text-center">
                    <h1>Login Form</h1>

                    <form onSubmit={formik.handleSubmit} id="loginform">
                        <div className="row my-3">
                            <label htmlFor="email">Email Address</label>
                            <input id="email" name="email" type="email"
                                onChange={formik.handleChange} onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
                        </div>
                        
                        <div className="row my-3">
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="password"
                                onChange={formik.handleChange} onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
                        </div>
                        
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;