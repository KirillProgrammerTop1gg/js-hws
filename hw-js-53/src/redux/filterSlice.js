import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, { payload }) => {
            state.status = payload
        },
    }
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;