import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../services/api';

export const keyGen = createAsyncThunk('KEYGEN',async(payload)=>{
    const response = await api.generateKey(payload)
    // await history.push('/');
    // window.location.reload()
    return response
});