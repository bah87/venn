import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';

const entitiesReducer = combineReducers({
  posts: postsReducer
});

export default entitiesReducer;
