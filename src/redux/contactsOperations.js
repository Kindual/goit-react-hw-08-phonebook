import axios from "axios";
const { createAsyncThunk } = require("@reduxjs/toolkit");

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk('contact/fetchAll', async (_, thunkApi) => {
    try {
        const response = await axios('/contacts');
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const deleteContact = createAsyncThunk('contact/deleteContact', async (contactId, thunkApi) => {
    try {
        const response = await axios.delete(`contacts/${contactId}`);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const addContact = createAsyncThunk('contact/addContact', async (contact, thunkApi) => {
    try {
        const response = await axios.post(`contacts`, contact);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})