import { configureStore } from '@reduxjs/toolkit';
import reduser from '../Reducers';

export default configureStore({
  reducer: reduser,
});
