import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout } from './actions/session_actions';
import { fetchPosts } from './actions/post_actions';

document.addEventListener("DOMContentLoaded", () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // testing purposes
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchPosts = fetchPosts;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store } />, root);
});
