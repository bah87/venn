import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import NewUserFormContainer from './new_user_form/new_user_form_container';

const App = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Venn!</h1>
        <GreetingContainer />
      </header>

      <Route path="/" component={SessionFormContainer} />
      <Route path="/" component={NewUserFormContainer} />
    </div>
  );
};

export default App;
