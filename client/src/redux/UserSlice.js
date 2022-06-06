import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    auth: {
        isLoggedIn: false,
    },
    user: {
        username: "",
        emailId: "",
    },
    success: "",
    error: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoggedIn(state) {
            state.auth.isLoggedIn = !state.auth.isLoggedIn;
        },
        setUserDATA(state, action) {
            state.user.username = action.payload.name;
            state.user.emailId = action.payload.email;
        },
        setSuccess(state, action) {
            state.success = action.payload;
        },
        setErr(state, action) {
            state.error = action.payload;
        },
    },
});

export const {setLoggedIn, setUserDATA, setSuccess, setErr} =
    userSlice.actions;
export default userSlice.reducer;
