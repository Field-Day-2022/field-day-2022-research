// // This prototype experiments with Redux using redux toolkit

// import logo from './logo.svg';
// import './App.css';

// import { createSlice, configureStore } from '@reduxjs/toolkit';

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0
//   },
//   reducers: {
//     incremented: state => {
//       // Redux toolkit allows us to write "mutating" logic in reducers. 
//       // It doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1;
//     },
//     decremented: state => {
//       state.value -= 1
//     }
//   }
// })

// export const { incremented, decremented } = counterSlice.actions;

// const store = configureStore({
//   reducer: counterSlice.reducer
// })

// // Can still subscribe to store
// store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to 'dispatch', but they're created for us
// store.dispatch(incremented());
// store.dispatch(incremented());
// store.dispatch(decremented());

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
