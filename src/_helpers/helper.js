import { EMAIL_REGEX } from "../_config/constants";
export const generateId = () => {
    return Math.floor(Date.now() + Math.random());
}

export const setFieldValue = (setFieldState, field_name, field_value) => {
    setFieldState((prevState) => {
        const obj_index = prevState.findIndex(obj => Object.keys(obj)[0] === field_name);
        if (obj_index !== -1) {
            return prevState.map((obj, index) => {
                if (index === obj_index) {
                    const updated_obj = { ...obj };
                    updated_obj[Object.keys(obj)[1]] = field_value;
                    return updated_obj;
                } else {
                    return obj;
                }
            });
        } else {
            return [...prevState, {[field_name]: field_name, value: field_value}];
        }
    });
};
  

export const validateField = (field_name, value, creds = {}, password = "") => {
    let message = "";
    let new_field_name = fieldTextGenerate(field_name);
    switch (field_name) {
        case "password":
            if (value.length < 3) {
                message = `${new_field_name} must be at least 3 characters.`;
            }
            break;
        case "email":
            if (!value.match(EMAIL_REGEX)) {
                message = `${new_field_name} is not a valid email address.`;
            }
            break;
        case "confirm_password":
            if (value !== password || value.length < 3) {
                message = `${new_field_name} does not match the password.`;
            }
            break;
        case "creds":
            if (value !== creds.email || password !== creds.password) {
                message = `Email/Password is invalid.`;
            }
            break;
        default:
            return {
                field: field_name,
                message: "",
            };
    }
    return {
        field: field_name,
        message: message,
    };
};

  const fieldTextGenerate = (field_name) => {
        return `${field_name.charAt(0).toUpperCase()}${field_name.replace("_", " ").slice(1)}`
  }