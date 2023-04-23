import axios from "axios";

const { createAsyncThunk } = require("@reduxjs/toolkit");

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const authCurrent = createAsyncThunk('auth/current', async (_, thunkApi) => {
    try {
        const response = await axios('/users/current');
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const logIn = createAsyncThunk('auth/login', async (user, thunkApi) => {
    try {
        const response = await axios.post(`/users/login`, user);
        getToken(response.data.token);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    try {
        const response = await axios.post(`/users/logout`);
        getToken('');
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const signup = createAsyncThunk('auth/signup', async (user, thunkApi) => {
    try {
        const response = await axios.post(`/users/signup`, user);
        getToken(response.data.token);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})