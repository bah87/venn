import * as TrendingApiUtil from '../util/trending_api_util';

export const RECEIVE_TRENDING_NEWS = 'RECEIVE_TRENDING_NEWS';

export const receiveTrendingNews = news => {
  return {
    type: RECEIVE_TRENDING_NEWS,
    news
  };
};

export const fetchTrendingNews = topic => dispatch => {
  return TrendingApiUtil.fetchTrendingNews(topic).then(news => {
    dispatch(receiveTrendingNews(news));
  });
};
