import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';

const App = () => {
  return (
    <div>
      <header>
        <h1>Venn</h1>
        <GreetingContainer />
      </header>

      <Route path="/" component={SessionFormContainer} />
    </div>
  );
};

export default App;
