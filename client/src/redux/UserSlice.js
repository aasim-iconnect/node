import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {
    isLoggedIn: false,
  },
  user: {
    username: "",
    emailId: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedIn(state) {
      state.auth.isLoggedIn = true;
    },
    setUserDATA(state, action) {
      state.user.username = action.payload.name;
      state.user.emailId = action.payload.email;
    },
  },
});

export const { setLoggedIn, setUserDATA } = userSlice.actions;
export default userSlice.reducer;
