import React from 'react'
import { useFormik } from 'formik';
import CustomButton from '../Button/Button';
import './Login-Form.css'

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

        <div className="container py-5 px-3" id="form-container">
            <div className="row justify-content-center" >
                <div className="col-10 col-md-9 col-lg-7 col-xl-6 pt-3 text-center" id="form-parent-col" >
                    <h1 className="pb-3">Login Form</h1>

                    <form onSubmit={formik.handleSubmit} id="loginform" >
                        <div className="row my-3 mx-2">
                            <label className="col-lg-3" htmlFor="email">Email :</label>
                            <input id="email" name="email" type="email" className="col-sm-12 col-lg-9"
                                onChange={formik.handleChange} onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
                        </div>
                        
                        <div className="row py-2 mx-2">
                            <label className="col-lg-3" htmlFor="password">Password :</label>
                            <input id="password" name="password" type="password" className="col-lg-9"
                                onChange={formik.handleChange} onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
                        </div>
                        
                        <CustomButton action={()=>{}} caption="Submit" usage="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;