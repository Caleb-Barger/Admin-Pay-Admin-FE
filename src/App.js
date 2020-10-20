import React from 'react';
import { Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { WIP_SRC, WIP_ROUTE } from './routes';
import Navigation from './components/Navigation';

const App = () => {

  return (
    <>
    <Route path={'/'}>
      <Navigation />
    </Route>
    <Route path={WIP_ROUTE}>
      <img src={WIP_SRC} />
    </Route>
    </>
  )  
}

export default App