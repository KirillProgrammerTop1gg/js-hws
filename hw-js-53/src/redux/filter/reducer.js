import { nanoid } from "nanoid";
import { createReducer } from "@reduxjs/toolkit";
import { setFilter } from "./action";

const initialState = "";

export const filterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setFilter, (state, action) => action.payload);
});