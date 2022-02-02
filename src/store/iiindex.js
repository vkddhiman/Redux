// import { createStore, combineReducers } from "redux";
import { createSlice, configureStore } from '@reduxjs/toolkit'
// export const INCREMENT = 'increment';

const initialCounterState = { counter : 0, showCounter: true };

const counterSlice = createSlice({
  name : 'counter',
  initialState : initialCounterState,
  reducers : {
    decrease (state, action) {
      state.counter = state.counter - action.payload
    },
    decrement (state) {
      state.counter--;
    },
    increase (state, action) {
      state.counter = state.counter + action.payload
    },
    increment (state) {
      state.counter++;
    },
    toggleCounter (state) {
      state.showCounter = !state.showCounter
    }
  }
});

// const counterReducer = (state = initialState , action ) => {
//   // if (action.type === INCREMENT) {
//   if (action.type === 'increment') {
//     return {
//       counter : state.counter + 1,
//       showCounter : state.showCounter
//     }
//   }

//   if (action.type === 'increase') {
//     return {
//       counter : state.counter + action.amount,
//       showCounter : state.showCounter
//     }
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter : state.counter -1 ,
//       showCounter : state.showCounter
//     }
//   }

//   if (action.type === 'decrease') {
//     return {
//       counter : state.counter - action.amount,
//       showCounter : state.showCounter
//     }
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter : !state.showCounter,
//       counter : state.counter
//     }
//   }

//   return state;
// };

// const store = createStore(counterReducer);
// const store = configureStore(counterSlice.reducer);

// counterSlice.actions.toggleCounter()

// return an action object for this shape(some auto generated unique identifier) because they create an action for all object so called as action creator


const store = configureStore({
  reducer: counterSlice.reducer
  // for merging all reducer into a big reducer for a large number of reducer written down below
  // reducer: {counter: counterSlice.reducer}
})

export const counterActions = counterSlice.actions; 

export default store;