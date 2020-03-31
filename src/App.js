import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './components/Login';
import {Provider} from 'react-redux';
import store from './redux/store';
import UserListContainer from './components/UserListContainer';

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/home" component={UserListContainer} />
            <Redirect to="/login" from="*" />
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
