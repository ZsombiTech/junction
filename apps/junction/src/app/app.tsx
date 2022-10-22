import React, { useEffect } from 'react';
import { User } from '@junction/api-interfaces';
import axios from 'axios';
import './app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Friends from '../pages/Friends';
import Navbar from '../components/Navbar';
import EditGroup from '../pages/EditGroup';

import Home from '../pages/Home';

export const App = () => {
  useEffect(() => {
    axios.get<User[]>('http://deducks2.tk:4201/api/users').then((data) => console.log(data.data));
  }, []);

  return (
    <Router>
      <div className="background">
        <Switch>
          <Route path="/editgroup">
            <EditGroup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
