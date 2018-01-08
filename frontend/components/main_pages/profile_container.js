import { connect } from 'react-redux';
import { fetchUser, saveUserPhoto } from '../../actions/user_actions';
import { toggleProfPicModal } from '../../actions/ui_actions';
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
    saveUserPhoto: photo => dispatch(saveUserPhoto(photo)),
    toggleProfPicModal: () => dispatch(toggleProfPicModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
