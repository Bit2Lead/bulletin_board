import { createSlice } from '@reduxjs/toolkit';


const initialState = [
    {id: 1, name: 'first name'},
    {id: 2, name: 'second name'}
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
});


export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;