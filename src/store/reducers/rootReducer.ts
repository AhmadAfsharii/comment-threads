import { combineReducers } from '@reduxjs/toolkit';
import commentsSlice from '../../features/commentsSlice';

const rootReducer = combineReducers({
  comments: commentsSlice,
});

export default rootReducer;
