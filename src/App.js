import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import NotFound from './components/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact to="/" component={Home} /> 
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App;
