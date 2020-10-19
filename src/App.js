import React from 'react';
import { Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import Dashboard from './components/Dashboard'

const APP_VERSION = 'v0.0.7'

const App = () => {

  return (
    <>
    <Route path="/">
      <p>Temporary Login Screen ;)</p>
    </Route>
    <PrivateRoute path="dashboard"component={Dashboard} APP_VERSION={APP_VERSION} />
    </>
  )  
}

export default App