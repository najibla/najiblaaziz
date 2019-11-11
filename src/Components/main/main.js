import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/home';
import Photos from '../photos/photos';
import './main.css';

const Main = () => (
  <main className="content">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:countryCode" component={Photos} />
    </Switch>
  </main>
);

export default Main;
