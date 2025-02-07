import { nanoid } from 'nanoid';
import { createReducer } from "@reduxjs/toolkit";
import { addContact, delContact } from "./action";

const initialState = [];

export const contactsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addContact, (state, action) => {
            state.push({
                id: nanoid(),
                name: action.payload.name,
                number: action.payload.number
            })
        })
        .addCase(delContact, (state, action) => state.filter(contact => contact.id !== action.payload))
});