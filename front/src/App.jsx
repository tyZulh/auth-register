import React from 'react';

import Register from './components/Register';
import Login from './components/Login';


import './App.css';
import { Route, Switch } from 'react-router-dom';
import Users from './components/Users';

function App() {
  return (
    <main className="App flex flex-wrap justify-evenly flex-col content-center">

      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/users" component={Users} />
      </Switch>
    </main>
  );
}

export default App;
