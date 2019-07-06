import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from '../components/privateRoute/privateRoute'
import Login from './login/login'
import Dashboard from './dashboard/dashboard'
import PageNotFound from './pageNotFound/pageNotFound'
import './app.common.css'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/admin" component={Dashboard} />
        <Route exact path="/404" component={PageNotFound} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default App
