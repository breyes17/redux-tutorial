import { configureStore } from '@reduxjs/toolkit';
import whookReducer from './whook/reducer';

const store = configureStore({
  reducer: {
    whook: whookReducer,
  },
});

export default store;
