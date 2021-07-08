import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/navbar/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Router exact path="/" component={Navbar} />
        </Switch>
      </Router>
    {/* <Navbar /> */}
    </div>
  );
}

export default App;
