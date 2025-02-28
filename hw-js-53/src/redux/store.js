import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import { contactsReducer } from './contactsSlice.js';
import { filterReducer } from './filterSlice.js';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const persistFilterReducer = persistReducer(persistConfig, filterReducer);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: persistFilterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
    devTools: composeWithDevTools(),
});

export const persisterStore = persistStore(store);