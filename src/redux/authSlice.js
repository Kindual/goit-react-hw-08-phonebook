const { createSlice } = require("@reduxjs/toolkit");
const { signup, logIn, logOut, authCurrent } = require("./authOperation");


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        error: null,
    },
    extraReducers: {
        [signup.pending]: (state) => {
            state.isLoggedIn = false;
        },
        [signup.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isRefreshing = true;
        },
        [signup.rejected]: (state, action) => {
            state.error = action.payload;
            state.isLoggedIn = false;
        },

        [logIn.pending]: (state) => {
            state.isLoggedIn = false;
        },
        [logIn.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isRefreshing = true;
        },
        [logIn.rejected]: (state, action) => {
            state.error = action.payload;
            state.isLoggedIn = false;
        },

        [logOut.fulfilled]: (state) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            // state.isRefreshing = false;
            state.error = null;
        },
        [logOut.rejected]: (state, action) => {
            state.error = action.payload;
        },

        [authCurrent.pending]: (state) => {
            state.isLoggedIn = false;
            state.isRefreshing = false;
        },
        [authCurrent.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = true;
        },
        [authCurrent.rejected]: (state, action) => {
            state.error = action.payload;
            state.isRefreshing = true;
            state.isLoggedIn = false;
        },
    }
})

export default authSlice.reducer;
