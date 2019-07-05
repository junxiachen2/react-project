import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from '../components/privateRoute/privateRoute'
import Login from './login/login'
import Dashboard from './dashboard/dashboard'
import PageNotFound from './pageNotFound/pageNotFound'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;