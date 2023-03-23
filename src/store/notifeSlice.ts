import { createSlice } from '@reduxjs/toolkit'

type SliceState = {
    notifications: string []
}

export const initialState: SliceState = {
    notifications: [],
}

export const notifeSlice = createSlice({
    name: 'notife',
    initialState,
    reducers: {
        add: (state, action) => {
            state.notifications = [...state.notifications, action.payload.valor];
        },
        clear: (state) => {
            state.notifications = [];
        }
    },
})

export const { add, clear } = notifeSlice.actions

export default notifeSlice.reducer