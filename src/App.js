import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home';
import Joke from './components/joke';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/joke" component={Joke} />
    </Router>
  );
}

export default App;
