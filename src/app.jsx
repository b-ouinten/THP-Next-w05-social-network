// eslint-disable-next-line import/no-unresolved
import './app.scss';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SocialNetwork from './pages/socialNetwork';

const App = () => (
  <Router>
    <SocialNetwork />
  </Router>
);

export default App;
