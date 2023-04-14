import { authenticateUser } from "../_reducers/sign_in.reducer";

export const signInState = {
    authenticateUser: (params) => {
        return (dispatcher) => {
            dispatcher(authenticateUser(params));
        }
    },
}