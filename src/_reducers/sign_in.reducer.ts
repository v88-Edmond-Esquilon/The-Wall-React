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

    }
});

const {

} = SignInManagement.actions;

export default SignInManagement.reducer;