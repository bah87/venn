import { connect } from 'react-redux';
import { fetchUser, saveCoverPhoto } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    saveCoverPhoto: photo => dispatch(saveCoverPhoto(photo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
