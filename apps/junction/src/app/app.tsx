import React, { useEffect } from 'react';
import { User } from '@junction/api-interfaces';
import axios from 'axios';
import './app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Friends from '../pages/Friends';
import EditGroup from '../pages/EditGroup';
import AddGroup from '../pages/AddGroup';
import EditTrip from '../pages/EditTrip';
import AddTrip from '../pages/AddTrip';
import TransferBalance from '../pages/TransferBalance';

export const App = () => {
  useEffect(() => {
    axios.get<User[]>('/api/users').then((data) => console.log(data.data));
  }, []);

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
