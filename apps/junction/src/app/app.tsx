import React, { useEffect } from 'react';
import { User } from '@junction/api-interfaces';
import axios from 'axios';
import './app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
