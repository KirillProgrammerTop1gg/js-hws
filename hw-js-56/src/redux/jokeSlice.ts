import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getJokes } from './jokeApi';

type JokeSchema = {
    id: number;
    type?: string;
    setup: string;
    punchline: string;
}

const initialState: {
    randomJokes: JokeSchema[];
    favJokes: JokeSchema[];
} = {
    randomJokes: [],
    favJokes: [],
};

const jokeSlice = createSlice({
    name: 'joke',
    initialState,
    reducers: {
        addFav(state, action: PayloadAction<JokeSchema>) {
            state.favJokes.push(action.payload);
        },
        removeFav(state, action: PayloadAction<number>) {
            state.favJokes = state.favJokes.filter(favJoke => favJoke.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getJokes.fulfilled, (state, action) => {
            state.randomJokes = action.payload;
        });
    }
});

export const { addFav, removeFav } = jokeSlice.actions;
export const jokeReducer = jokeSlice.reducer;
