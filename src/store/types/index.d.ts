import { Action, ThunkAction } from '@reduxjs/toolkit';

import store from '..';

// Infer the `RootState`, `AppDispatch` and `ThunkAction` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
