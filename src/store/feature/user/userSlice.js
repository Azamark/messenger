import { createSlice } from "@reduxjs/toolkit";

//Создаем состояние в данном слайсе

const initialState = {
    login: '',
    password: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload
        },
    }
});

export const { setUserData } = userSlice.actions
export default userSlice.reducer