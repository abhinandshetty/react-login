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
import SidebarExampleSidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Router>
            <SidebarExampleSidebar />

              <Navbar />
              <Switch>
                <Route path="/home" component={UserListContainer} />
              </Switch>
            </Router>
            <Redirect to="/login" from="*" />
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
