import React, { useEffect } from 'react';
import { User } from '@junction/api-interfaces';
import axios from 'axios';
import './app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Login from '../pages/Login';
import Trip from '../pages/Trip';
import Home from '../pages/Home';
import EditGroup from '../pages/EditGroup';
import AddGroup from '../pages/AddGroup';
import EditTrip from '../pages/EditTrip';
import AddTrip from '../pages/AddTrip';
import TransferBalance from '../pages/TransferBalance';
import Stats from '../pages/Stats';
import Friends from '../pages/Friends';
import Main from '../pages/Main';

export const App = () => {
  return (
    <Router>
      <div className="background">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/friends">
            <Friends />
            <Navbar />
          </Route>
          <Route path="/main">
            <Main />
            <Navbar />
          </Route>
          <Route path="/editgroup">
            <EditGroup />
            <Navbar />
          </Route>
          <Route path="/addgroup">
            <AddGroup />
            <Navbar />
          </Route>
          <Route path="/edittrip">
            <EditTrip />
            <Navbar />
          </Route>
          <Route path="/addtrip">
            <AddTrip />
            <Navbar />
          </Route>
          <Route path="/transferbalance">
            <TransferBalance />
            <Navbar />
          </Route>
          <Route path="/trip">
            <Trip />
            <Navbar />
          </Route>
          <Route path="/stats">
            <Stats />
            <Navbar />
          </Route>
          <Route path="/">
            <Home />
            <Navbar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
