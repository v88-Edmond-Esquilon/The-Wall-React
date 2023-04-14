import { addNewUser, authenticateUser } from "../_reducers/sign_up.reducer";


export const signUpState = {
    addNewUser: (params) => {
        return (dispatcher) => {
            dispatcher(addNewUser(params));
        }
    },
    authenticateUser: (params) => {
        return (dispatcher) => {
            dispatcher(authenticateUser(params));
        }
    }
} 