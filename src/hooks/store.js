// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './authSlice';

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../hooks/authSlice';

// Function to save the state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

// Function to load the state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

const persistedState = loadState();

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
  });
});

export default store;
