# React App Structure

https://redux.js.org/tutorials/essentials/part-2-app-structure

- using the `toolkit` is recommended, as it simplifies a lot of things

## Slice

- A  "slice" is a collection of redux reducer logic and actions for a single feature in your app, typically defined in a single file

  - The name comes from splitting up the root redux state object into multiple "slices" of state

- How to create a slice:
  ```js
  import { createSlice } from '@reduxjs/toolkit'
  
  export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 0
    },
    reducers: {
      increment: state => {
        state.value += 1
      },
      decrement: state => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      }
    }
  })
  
  export const { increment, decrement, incrementByAmount } = counterSlice.actions
  
  export default counterSlice.reducer
  ```

## Thunk

- is like an an async slice

- written with 2 functions:

  - inside thunk function with `dispatch` and `getState` as arguments
  - outer creator function, which creates and returns the thunk function

- counter example:
  ```js
  // The function below is called a thunk and allows us to perform async logic.
  // It can be dispatched like a regular action: `dispatch(incrementAsync(10))`.
  // This will call the thunk with the `dispatch` function as the first argument.
  // Async code can then be executed and other actions can be dispatched
  export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount))
    }, 1000)
  }
  ```

- usage:
  ```js
  store.dispatch(incrementAsync(5))
  ```

- example with AJAX calls to a server:
  ```js
  // the outside "thunk creator" function
  const fetchUserById = userId => {
    // the inside "thunk function"
    return async (dispatch, getState) => {
      try {
        // make an async call in the thunk
        const user = await userAPI.fetchById(userId)
        // dispatch an action when we get the response back
        dispatch(userLoaded(user))
      } catch (err) {
        // If something went wrong, handle it here
      }
    }
  }
  ```

## useSelector

- for reading data from redux store

- defined in the slice file

- counter example: read the current count state:
  ```js
  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state) => state.counter.value)`
  export const selectCount = state => state.counter.value
  ```

## useDispatch

- the same as `store.dispatch(increment())` but if we don't have access to the store

- usage:
  ```js
  const dispatch = useDispatch();
  dispatch(increment())
  ```

 ## Global vs Local State

- only put global state in redux, component state should stay local

## Provider

- to provide redux to the entire app, wrap it in a Provider component:
  ```js
  import React from 'react'
  import ReactDOM from 'react-dom'
  import './index.css'
  import App from './App'
  import store from './app/store'
  import { Provider } from 'react-redux'
  import * as serviceWorker from './serviceWorker'
  
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
  ```

# Basic Redux Data Flow

https://redux.js.org/tutorials/essentials/part-3-data-flow

- this tutorial goes over fetching data from a dummy server (blog posting site) using redux
- 