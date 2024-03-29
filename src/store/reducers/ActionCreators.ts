import {AppDispatch} from "../store";
import {IUser} from "../../models/IUser";
import axios from "axios";
import {userSlice} from "./UserSlie";
import {createAsyncThunk} from "@reduxjs/toolkit";
//
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchingSuccess(res.data))
//     } catch (e: any) {
//         dispatch(userSlice.actions.usersFetchingError(e.message))
//     }
// }
//
// export const fetchUsers = createAsyncThunk(
//     'user/fetchAll',
//     async() => {
//         const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         return res.data;
//     }
// )

export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('FAILED LOL');
        }
    }
)