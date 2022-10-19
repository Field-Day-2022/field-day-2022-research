// This file is for creating and exporting the redux store
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';

// Redux store is created using configureStore, which requires a reducer argument
// All reducer functions used across the app must go in here, the key names map to the final state value
export default configureStore({
  reducer: {
    counter: counterReducer
  }
})