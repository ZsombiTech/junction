import React, { useEffect } from 'react';
import { User } from '@junction/api-interfaces';
import axios from 'axios';
import './app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';

export const App = () => {
  useEffect(() => {
    axios.get<User[]>('/api/users').then((data) => console.log(data.data));
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/users">
            <h1>Users</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
