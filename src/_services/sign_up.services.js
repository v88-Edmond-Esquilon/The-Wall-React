const addNewUser = (state, action) => {
    const email = action.payload.email;
    const password = action.payload.password;
    state.registered_users.push({email: email, password: password});
}

const authenticateUser = (state, action) => {
    state.authenticate = action.payload;
}

const SignUpService = {
    addNewUser,
    authenticateUser
}

export default SignUpService;
