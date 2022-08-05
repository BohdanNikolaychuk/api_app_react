import { configureStore } from '@reduxjs/toolkit';
import catImgSlice from './slices/catImgSlice';
export const store = configureStore({
  reducer: {
    catImgSlice,
  },
});
