import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import NewUserFormContainer from './new_user_form_container';

const LandingPage = () => {
  return (
    <main>
      <SessionFormContainer />
      <NewUserFormContainer />
    </main>
  );
};

export default LandingPage;
