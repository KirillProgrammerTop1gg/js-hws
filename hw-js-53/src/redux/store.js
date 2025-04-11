import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import { contactsReducer } from './contactsSlice.js';
import { filterReducer } from './filterSlice.js';
import { authReducer } from './authSlice.js';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const persistFilterReducer = persistReducer(persistConfig, filterReducer);
const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: persistFilterReducer,
        auth: persistAuthReducer,
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