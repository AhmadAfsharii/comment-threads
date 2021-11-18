import { combineReducers } from '@reduxjs/toolkit';
import commentsSlice from '../../comments/state/commentsSlice';

const rootReducer = combineReducers({
  comments: commentsSlice,
});

export default rootReducer;
