import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, delContact, addContact } from './contactsApi';

const initialState = {
    contactsList: []
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
            state.contactsList = payload;
        });
        builder.addCase(delContact.fulfilled, (state, { payload }) => {
            state.contactsList = state.contactsList.filter(contact => contact.id !== payload)
        });
        builder.addCase(addContact.fulfilled, (state, { payload }) => {
            state.contactsList.push(payload)
        });
    }
});

export const contactsReducer = contactsSlice.reducer;