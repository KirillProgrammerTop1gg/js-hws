import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from './authApi';

const initialState = {
    email: "",
    token: "",
    err: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        fixError(state, action) {
            state.err = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.rejected, (state, action) => {
            state.err = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.email = action.payload.user.email;
            state.err = false;
        });
        builder.addCase(logout.fulfilled, (state, action) => {
            state.token = '';
            state.err = false;
        });
        builder.addCase(register.rejected, (state, action) => {
            state.err = true;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.email = action.payload.user.email;
            state.err = false;
        });
    }
});

export const authReducer = authSlice.reducer;
export const { fixError } = authSlice.actions;