/** React */
import React, { useState }              from "react";
import { Link, useNavigate }            from "react-router-dom";
/** Helper */
import { setFieldValue, validateField } from "../../../_helpers/helper";
/** CSS */
import "./register_form.component.less";


export default function RegisterForm() {
    let [fields, setFields] = useState([
        {email: "email", value: ""},
        {password: "password" , value: ""},
        {confirm_password: "confirm_password", value: ""}
    ]);
    let [errors, setErrors] = useState();
    let navigate = useNavigate();

    const handleSubmitSignUp = (event) => {
        event.preventDefault();
        let error_verifier = {};
        fields?.forEach( field_item => {
            let password = Object.values(fields[1])[1];
            const { field, message } = validateField(Object.keys(field_item)[0], field_item.value, {}, password);
            setErrors(prevState => {
                return {...prevState, [field]: message};
            });
            if (message) {
                error_verifier[field] = message;
            }
        });
        if (!Object.keys(error_verifier).length) {
            navigate("/wall_dashboard");
        }
    }

    return (
        <form id="register_form" autoComplete="off" onSubmit={handleSubmitSignUp} method="POST">
            <h2>The Wall</h2>
            <h1>Register</h1>
            <div className="input_control">
                <label htmlFor="email">Email</label>
                <input
                    autoFocus
                    className={errors?.email? "error_input" : ""} 
                    id="email" 
                    onChange={(event) => setFieldValue(setFields, "email", event.target.value)}
                    tabIndex={1} 
                    type="text" 
                    value={fields[0] ? Object.values(fields[0])[1] : ''}
                />
                <div className="error_message">{errors?.email}</div>
            </div>
            <div className="input_control">
                <label htmlFor="password">Password</label>
                <input 
                    className={errors?.password? "error_input" : ""}
                    id="password" 
                    onChange={(event) => setFieldValue(setFields, "password", event.target.value)}
                    tabIndex={2} 
                    type="password" 
                    value={fields[1] ? Object.values(fields[1])[1] : ''}
                />
                <div className="error_message">{errors?.password}</div>
            </div>
            <div className="input_control">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input 
                    className={errors?.confirm_password? "error_input" : ""}
                    id="confirm_password" 
                    onChange={(event) => setFieldValue(setFields, "confirm_password", event.target.value)}
                    tabIndex={2} 
                    type="password" 
                    value={fields[2] ? Object.values(fields[2])[1] : ''}
                />
                <div className="error_message">{errors?.confirm_password}</div>
            </div>
            <p className="text">By creating an account, you agree with The W all's <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a>.</p>
            <button id="register_btn" tabIndex={3} type="submit">SIGN UP</button>
            <p className="text">Already have an account ? <Link to="/">Sign In</Link></p>
        </form>
    )
}
