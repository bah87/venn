import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import NewUserFormContainer from './new_user_form/new_user_form_container';
import LandingPage from './new_user_form/landing_page';
import PostIndexContainer from './posts/post_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <header>
        <GreetingContainer />
      </header>

      <Switch>
        <AuthRoute exact path="/login" component={LandingPage} />
        <ProtectedRoute exact path="/profile" component={PostIndexContainer} />
      </Switch>
    </div>
  );
};

export default App;
