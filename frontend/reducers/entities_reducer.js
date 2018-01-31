import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';
import usersReducer from './users_reducer';
import commentsReducer from './comments_reducer';
import friendRequestsReducer from './friend_requests_reducer';
import userSearchReducer from './user_search_reducer';
import trendingReducer from './trending_reducer';
import likesReducer from './likes_reducer';

const entitiesReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  comments: commentsReducer,
  friendRequests: friendRequestsReducer,
  searchedUsers: userSearchReducer,
  trendingNews: trendingReducer,
  likes: likesReducer
});

export default entitiesReducer;
