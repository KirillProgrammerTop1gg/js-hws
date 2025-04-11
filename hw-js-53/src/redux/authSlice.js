import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from './authApi';

const initialState = {
    email: "",
    token: "",
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.email = action.payload.user.email;
        });
        builder.addCase(logout.fulfilled, (state, action) => {
            state.token = '';
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.email = action.payload.user.email;
        });
    }
});

export const authReducer = authSlice.reducer;