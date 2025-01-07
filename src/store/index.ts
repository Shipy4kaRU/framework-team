import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import paintsDataReducer from './paintsDataSlice';

const store = configureStore({
  reducer: {
    paintsData: paintsDataReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddlware: Function) => getDefaultMiddlware().concat(api.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
