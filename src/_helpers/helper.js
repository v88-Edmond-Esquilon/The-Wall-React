import { EMAIL_REGEX } from "../_config/constants";
export const generateId = () => {
    return Math.floor(Date.now() + Math.random());
}

export const setFieldValue = (setState, field_name, field_value) => {
    setState((prevState) => {
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
      
        if (field_name === "password" && value.length < 3) {
            return {
                field: field_name.toString(),
                message: `${field_name.charAt(0).toUpperCase()}${field_name
                .replace("_", " ")
                .slice(1)} must be at least 3 characters.`,
            };
        } else if (field_name === "email" && !value.match(EMAIL_REGEX)) {
            return {
                field: field_name,
                message: `${field_name.replace("_", " ")
                        .charAt(0).toUpperCase()}${field_name
                        .replace("_", " ")
                        .slice(1)} is not a valid email address.`,
            };
        } else if ( field_name === "confirm_password" && value !== password || value.length < 3) {
            return {
                field: field_name,
                message: `${field_name.replace("_", " ")
                            .charAt(0).toUpperCase()}${field_name
                            .replace("_", " ")
                            .slice(1)} does not match the password.`,
            };
        } else if ( field_name === "creds" && (value !== creds.email || password !== creds.password) ) {
            return {
                field: field_name,
                message: `Email/Password is invalid.`,
            };
        } else if (field_name === "confirm_password" && value.length < 3) {
            return {
                field: field_name.toString(),
                message: `${field_name.charAt(0).toUpperCase()}${field_name
                .replace("_", " ")
                .slice(1)} must be at least 3 characters.`,
            };
        }
        return {
            field: field_name,
            message: "",
        };
  };
  