import { createSlice } from "@reduxjs/toolkit";
import SignUpService from "../_services/sign_up.services";

export interface SignUpState {

}

const initialState : SignUpState = {

}

const SignUpManagement = createSlice({
    name:"sign_up",
    initialState,
    reducers: {

    }
});

const {

} = SignUpManagement.actions;

export default SignUpManagement.reducer;