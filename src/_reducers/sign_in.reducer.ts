import { createSlice } from "@reduxjs/toolkit";
import SignInService from "../_services/sign_in.services";



export interface signInState {
    authenticate: boolean;
}

const initialState: signInState = {
    authenticate: false,
}


const SignInManagement = createSlice({
    name: "sign_in",
    initialState,
    reducers: {
        authenticateUser : SignInService.authenticateUser,
    }
});

export const {
    authenticateUser,
} = SignInManagement.actions;

export default SignInManagement.reducer;