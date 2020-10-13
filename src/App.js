import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (<Products />)} />
      </Switch>
    </Router>
  );
}

export default App;
