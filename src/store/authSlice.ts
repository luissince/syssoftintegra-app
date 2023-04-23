import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Empleado from '../model/interfaces/empleado.interfaces';
import Auth from '../model/types/auth.types';

 const initialState: Auth = {
    loading: true,
    user: null,
    token: null,
    authentication: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        starting: (state) => {
            window.localStorage.clear();
            state.loading = false;
            state.user = null;
            state.authentication = false;
        },
        restore: (state, action: PayloadAction<{empleado: Empleado, token: string, authentication: boolean}>) => {
            state.loading = false;
            state.user = action.payload.empleado;
            state.authentication = action.payload.authentication;
            state.token = action.payload.token;
        },
        login: (state, action: PayloadAction<{ empleado: Empleado, token: string }>) => {
            state.authentication = true;
            state.user = action.payload.empleado;
            state.token = action.payload.token;
            window.localStorage.setItem('user', JSON.stringify(action.payload.empleado));
            window.localStorage.setItem('token', JSON.stringify(action.payload.token));
        },
        logout: (state) => {
            window.localStorage.clear();
            state.loading = true;
            state.user = null;
            state.authentication = false;
        },
    },
})

export const { starting, login, logout, restore } = authSlice.actions

export default authSlice.reducer