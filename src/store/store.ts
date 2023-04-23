import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import notifeSlice from './notifeSlice';
import empresaSlice from './empresaSlice';

const store = configureStore({
  reducer: {
    authentication: authReducer,
    notifications: notifeSlice,
    empresa: empresaSlice
  },
});


export type RootState = ReturnType<typeof store.getState>

export default store;