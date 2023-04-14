import { createSlice } from "@reduxjs/toolkit";
import SignUpService from "../_services/sign_up.services";

export interface SignUpState {
    registered_users: any[];
    authenticate: boolean;
}

const initialState : SignUpState = {
    registered_users: [],
    authenticate: false,
}

const SignUpManagement = createSlice({
    name:"sign_up",
    initialState,
    reducers: {
        addNewUser       : SignUpService.addNewUser,
        authenticateUser : SignUpService.authenticateUser
    }
});

export const {
    addNewUser,
    authenticateUser
} = SignUpManagement.actions;

export default SignUpManagement.reducer;