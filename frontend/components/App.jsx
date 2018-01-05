import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/nav_bar_container';
import LandingPage from './new_user_form/landing_page';
import ProfileContainer from './main_pages/profile_container';
import NewsFeedContainer from './main_pages/news_feed_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <header>
        <NavBarContainer />
      </header>

      <Switch>
        <AuthRoute exact path="/login" component={LandingPage} />
        <ProtectedRoute exact path="/profile/:userId"
          component={ProfileContainer} />
        <ProtectedRoute exact path="/feed" component={NewsFeedContainer} />
      </Switch>
    </div>
  );
};

export default App;
