import { configureStore } from '@reduxjs/toolkit';
import contactReducer from "./contactSlice";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import authSlice from './authSlice';

const persistConfig = {
    key: 'contact',
    storage,
}

const authConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

const phonebookReducer = persistReducer(persistConfig, contactReducer)
const authReducer = persistReducer(authConfig, authSlice)

export const store = configureStore({
    reducer: {
        contact: phonebookReducer,
        auth: authReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export default store;
export const persistor = persistStore(store);
