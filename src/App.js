import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'

const APP_VERSION = 'v0.0.6'

const App = () => {

  return (
    <Route path="/login">
      <Dashboard APP_VERSION={APP_VERSION}/>
    </Route>
  )  
}

export default App