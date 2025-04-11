import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const login = createAsyncThunk('auth/login', async (_, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', _);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
});

export const register = createAsyncThunk('auth/register', async (_, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', _);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        const response = await axios.post("/users/logout", {}, {headers: {"Authorization": `Bearer ${_}`}})
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
});