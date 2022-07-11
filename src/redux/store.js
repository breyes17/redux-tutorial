import { configureStore } from '@reduxjs/toolkit';
import whookReducer from './whook/reducer';
import pointReducer from './hooks/reducer';

const store = configureStore({
  reducer: {
    whook: whookReducer,
    hooks: pointReducer,
  },
});

export default store;
