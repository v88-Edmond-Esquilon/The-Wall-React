/** React */
import React, { useState }              from "react";
import { Link, useNavigate }            from "react-router-dom";
/** Component */
import { SideImage } from "../../components";
/** Redux */
import { useSelector, useDispatch }     from "react-redux";
/** Helper */
import { setFieldValue, validateField } from "../../../_helpers/helper";
/** CSS */
import "./login_form.component.less";

export default function LoginForm() {
    let [fields, setFields] = useState([
        {email:"email", value: ""},
        {password: "password", value: ""}
    ]);
    let [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { sign_up: { registered_users }} = useSelector(state => state);

    const onLoginSubmitForm = (event) => {
        event.preventDefault();
        let error_verifier = {};

        fields?.forEach( field_item => {
            const { field, message } = validateField(Object.keys(field_item)[0], field_item.value);

            setErrors(prevState => {
                return {...prevState, [field]: message};
            });

            if (message) {
                error_verifier[field] = message;
            }
        });
        
        if (!Object.keys(error_verifier).length) {
            console.log(registered_users, " from login");
            // navigate("/wall_dashboard");
        }
    }

    return (
        <>
            <form id="login_form" autoComplete="off" onSubmit={onLoginSubmitForm} method="POST" >
                <h2>The Wall</h2>
                <h1>Log In</h1>
                <div className="input_control">
                    <label htmlFor="email">Email</label>
                    <input
                        autoFocus
                        id="email" 
                        name="email_1"
                        tabIndex={1} 
                        type="text" 
                        className={errors?.email? "error_input" : ""} 
                        onChange={(event) => setFieldValue(setFields, "email", event.target.value)}
                        value={fields[0] ? Object.values(fields[0])[1] : ''}
                    />
                    <div className="error_message">{errors?.email}</div>
                </div>
                <div className="input_control">
                    <label htmlFor="password">Password</label>
                    <a href="#">Forgot Password ?</a>
                    <input 
                        autoComplete="new-password"
                        id="password"
                        name="password_1"        
                        tabIndex={2} 
                        type="password" 
                        onChange={(event) => setFieldValue(setFields, "password", event.target.value)}
                        className={errors?.password? "error_input" : ""}
                        value={fields[1] ? Object.values(fields[1])[1] : ''}
                    />
                    <div className="error_message">{errors?.password}</div>
                </div>
                <button id="login_btn" tabIndex={3} type="submit">SIGN IN</button>
                <p>I don’t have an account ? <Link to="/register">Sign Up</Link></p>
             </form>
            <SideImage/>
        </>
    )
}
