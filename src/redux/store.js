import { configureStore } from '@reduxjs/toolkit';  // Ensure this path is correct
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
});

export default store;
