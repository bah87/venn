import { RECEIVE_TRENDING_NEWS } from '../actions/trending_actions';
import merge from 'lodash/merge';

const trendingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRENDING_NEWS:
      return merge({}, action.news);
    default:
      return state;
  }
};

export default trendingReducer; 
