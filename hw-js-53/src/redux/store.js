import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import { contactsReducer } from './contacts/reducer.js';
import { filterReducer } from './filter/reducer.js';

export default configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
    devTools: composeWithDevTools(),
});