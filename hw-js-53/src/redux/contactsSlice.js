import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
    contactsList: []
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, { payload }) => {
            state.contactsList.push({
                id: nanoid(),
                name: payload.name,
                number: payload.number
            })
        },
        delContact: (state, { payload }) => {
            state.contactsList = state.contactsList.filter(contact => contact.id !== payload)
        },
    }
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, delContact } = contactsSlice.actions;