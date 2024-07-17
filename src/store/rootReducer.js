import { combineReducers } from '@reduxjs/toolkit';
import aptoReducer from './apto/aptoSlice';

const rootReducer = combineReducers({
  aptos: aptoReducer,
});

export default rootReducer;