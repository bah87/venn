import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import NewUserFormContainer from './new_user_form/new_user_form_container';
import PostIndexContainer from './posts/post_index_container';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <header>
        <GreetingContainer />
      </header>

      <AuthRoute path="/" component={SessionFormContainer} />
      <AuthRoute path="/" component={NewUserFormContainer} />
      <Route path="/profile" component={PostIndexContainer} />
    </div>
  );
};

export default App;
