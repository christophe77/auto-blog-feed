import { combineReducers } from '@reduxjs/toolkit';
import { articleReducer } from './reducers/articleReducer';
import pageReducer from './reducers/pageReducer';
import loginReducer from './reducers/loginReducer';
import store from './store';

const rootReducer = combineReducers({
  articleReducer,
  pageReducer,
  loginReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default rootReducer;
