import { configureStore } from '@reduxjs/toolkit'
import refReducer from '../features/ref'
export default configureStore({
  reducer: {
     ref: refReducer,

  },
  

})
