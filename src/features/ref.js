import { createSlice } from "@reduxjs/toolkit";
import { keyGen } from "./refThunk";
// import {NotificationContainer, NotificationManager} from 'react-notifications';
import { ToastContainer, toast } from 'react-toastify';


const initialState = {
    loading: false,
    refData: [],
    message:"",
    generated: false
}

export const refSlice = createSlice({
    name:"ref",
    initialState,
    reducers:{ },
    extraReducers:{
      
        [keyGen.pending]: (state, action) => {
            state.loading = true;   
        },
        [keyGen.fulfilled]: (state, action) => {
            state.loading = false;
            state.refData = action.payload.data.message;
            state.generated = true;
           
        },
        [keyGen.rejected]: (state, action) => {
            state.loading = false;
            state.message = action.error.message;
            state.generated = false;
            toast.error( action.error.message ,1000)
        }

    }
})

export const {} = refSlice.actions;

// export const {login, logout} = authSlice.actions;
export default refSlice.reducer;



