import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/nav_bar_container';
import LandingPage from './new_user_form/landing_page';
import PostIndexContainer from './posts/post_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <header>
        <NavBarContainer />
      </header>

      <Switch>
        <AuthRoute exact path="/login" component={LandingPage} />
        <ProtectedRoute exact path="/profile" component={PostIndexContainer} />
      </Switch>
    </div>
  );
};

export default App;
