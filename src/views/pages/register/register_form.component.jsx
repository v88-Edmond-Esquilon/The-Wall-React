/** React */
import React, { useState }              from "react";
import { Link, useNavigate }            from "react-router-dom";
/** Redux */
import { useSelector, useDispatch } from "react-redux";
import { signUpState } from "../../../_actions/sign_up.actions";
/** Component */
import { SideImage } from "../../components";
/** Helper */
import { setFieldValue, validateField } from "../../../_helpers/helper";
/** CSS */
import "./register_form.component.less";

export default function RegisterForm() {
    let [sign_up_fields, setFields] = useState([
        {email: "email", value: ""},
        {password: "password" , value: ""},
        {confirm_password: "confirm_password", value: ""}
    ]);
    let [errors, setErrors] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { sign_up: { registered_users } } = useSelector(state => state);

    const onSubmitSignUpForm = (event) => {
        event.preventDefault();
        let error_verifier = {};

        sign_up_fields?.forEach( field_item => {
            let password = Object.values(sign_up_fields[1])[1];
            const { field, message } = validateField(Object.keys(field_item)[0], field_item.value, {}, password);

            setErrors(prevState => {
                return {...prevState, [field]: message};
            });

            if (message) {
                error_verifier[field] = message;
            }
        });

        if (!Object.keys(error_verifier).length) {
            const email = sign_up_fields[0]?.value;
            const password = sign_up_fields[2]?.value;
            dispatch(signUpState.addNewUser({email: email, password: password}));
            // navigate("/wall_dashboard");
        }
    }

    return (
        <>
            <form id="register_form" autoComplete="off" onSubmit={onSubmitSignUpForm} method="POST">
                <h2>The Wall</h2>
                <h1>Register</h1>
                <div className="input_control">
                    <label htmlFor="email">Email</label>
                    <input
                        autoFocus
                        id="email" 
                        tabIndex={1} 
                        type="text"
                        className={errors?.email? "error_input" : ""} 
                        onChange={(event) => setFieldValue(setFields, "email", event.target.value)}
                        value={sign_up_fields[0] ? Object.values(sign_up_fields[0])[1] : ''}
                    />
                    <div className="error_message">{errors?.email}</div>
                </div>
                <div className="input_control">
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password" 
                        tabIndex={2} 
                        type="password" 
                        autoComplete="new-password"
                        onChange={(event) => setFieldValue(setFields, "password", event.target.value)}
                        className={errors?.password? "error_input" : ""}
                        value={sign_up_fields[1] ? Object.values(sign_up_fields[1])[1] : ''}
                    />
                    <div className="error_message">{errors?.password}</div>
                </div>
                <div className="input_control">
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input 
                        id="confirm_password" 
                        tabIndex={2} 
                        type="password" 
                        onChange={(event) => setFieldValue(setFields, "confirm_password", event.target.value)}
                        className={errors?.confirm_password? "error_input" : ""}
                        value={sign_up_fields[2] ? Object.values(sign_up_fields[2])[1] : ''}
                    />
                    <div className="error_message">{errors?.confirm_password}</div>
                </div>
                <p className="text">By creating an account, you agree with The W all's <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>.</p>
                <button id="register_btn" tabIndex={3} type="submit">SIGN UP</button>
                <p className="text">Already have an account ? <Link to="/">Sign In</Link></p>
            </form>
            <SideImage/>
        </>
    )
}
