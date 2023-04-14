const authenticateUser = (state, action) => {
    state.authenticate = action.payload;
}


const SignInService = {
    authenticateUser
}

export default SignInService;