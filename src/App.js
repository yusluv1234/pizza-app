import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/navbar/index';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Router path="/" component={Navbar} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
