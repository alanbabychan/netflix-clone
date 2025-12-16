import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "./slices/apiSlice";
import discoverReducer from "./slices/discover";
import authReducer from "./slices/authSlice";
import subscriptionReducer from "./slices/subscriptionSlice";

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('netflixState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify({
      auth: state.auth,
      subscription: state.subscription
    });
    localStorage.setItem('netflixState', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const persistedState = loadState();

const store = configureStore({
  reducer: {
    discover: discoverReducer,
    auth: authReducer,
    subscription: subscriptionReducer,
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
