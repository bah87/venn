import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';
import usersReducer from './users_reducer';
import uiReducer from './ui_reducer';

const entitiesReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  ui: uiReducer
});

export default entitiesReducer;
