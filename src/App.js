import React from 'react';
import { Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import Dashboard from './components/Dashboard'
import { DASHBOARD_ROUTE, WIP_SRC, WIP_ROUTE } from './routes';
import SiderNav from './components/SiderNav';

const APP_VERSION = 'v0.0.8'

const App = () => {

  return (
    <>

    {/* <PrivateRoute path={DASHBOARD} 
      component={Dashboard} 
      APP_VERSION={APP_VERSION} 
    /> */}
    <Route path={DASHBOARD_ROUTE}>
      {/* <Dashboard APP_VERSION={APP_VERSION} /> */}
      <SiderNav APP_VERSION={APP_VERSION} />
    </Route>
    <Route path={WIP_ROUTE}>
      <img src={WIP_SRC} />
    </Route>
    </>
  )  
}

export default App