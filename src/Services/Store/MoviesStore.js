import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../Reducers/MoviesReducer';

export default configureStore({
  reducer: movieReducer,
});
