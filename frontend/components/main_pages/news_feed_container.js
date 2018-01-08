import { connect } from 'react-redux';
import NewsFeed from './news_feed';
import { fetchFriends } from '../../actions/user_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    friends: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFriends: () => dispatch(fetchFriends())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);
