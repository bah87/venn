import { connect } from 'react-redux';
import NewsFeed from './news_feed';
import { fetchFriends } from '../../actions/user_actions';
import { fetchTrendingNews } from '../../actions/trending_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    friends: state.entities.users,
    news: state.entities.trendingNews.articles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFriends: () => dispatch(fetchFriends()),
    fetchTrendingNews: topic => dispatch(fetchTrendingNews(topic))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);
