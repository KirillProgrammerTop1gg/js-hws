import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

type JokeSchema = {
    id: number;
    type?: string;
    setup: string;
    punchline: string;
}

axios.defaults.baseURL = 'https://official-joke-api.appspot.com';

export const getJokes = createAsyncThunk<JokeSchema[], void, {rejectValue:string}>('jokes/getJokes', async (_, thunkAPI) => {
    try {
        const response = await axios.get<JokeSchema[]>("/jokes/random/10")
        return response.data;
    } catch (e) {
        const error = e as Error;
        return thunkAPI.rejectWithValue(error.message);
    }
});