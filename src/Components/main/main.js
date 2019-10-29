import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/home';
import './main.css';

const Main = () => (
  <main className="content">
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </main>
);

export default Main;
