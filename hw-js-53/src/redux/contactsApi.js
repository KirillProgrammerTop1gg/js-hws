import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://67c2367061d8935867e5abc7.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
});

export const delContact = createAsyncThunk('contacts/delContact', async (_, thunkAPI) => {
    try {
        await axios.delete(`/contacts/${_}`);
        return _;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (_, thunkAPI) => {
    try {
        await axios.post(`/contacts`, _);
        const response = await axios.get('/contacts');
        return response.data.at(-1);
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
});