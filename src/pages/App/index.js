import React, {useEffect} from 'react';
import {
  Router, Route, Switch, Redirect
} from "react-router-dom";
import Login from '../Login';
import Identity from '../Identity';
import Pegawai from '../Pegawai';
import { history } from '../../_helpers';

const PrivateRoute = ({ component: Component, ...rest }) => 
(  
  <Route {...rest} render={props => 
  (
    localStorage.getItem('token') ? <Component {...props} /> : <Redirect to={{pathname: '/login'}}/>
  )}/>
);

function App() {

  return (
    <Router history={history}>
      <Switch>
      <PrivateRoute exact path="/" component={Identity} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/pegawai" component={Pegawai} />
      <Redirect from="*" to="/" />
      </Switch>
  </Router>
  );
}


export default App;
