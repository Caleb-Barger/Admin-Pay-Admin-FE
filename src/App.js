import React from 'react';
import { Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import Dashboard from './components/Dashboard'
import { DASHBOARD, WIP } from './routes';

const APP_VERSION = 'v0.0.7'

const App = () => {

  return (
    <>
    <Route path="/">
      <img src={WIP} />
    </Route>
    <PrivateRoute path={DASHBOARD} 
      component={Dashboard} 
      APP_VERSION={APP_VERSION} 
    />
    </>
  )  
}

export default App