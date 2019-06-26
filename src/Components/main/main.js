import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cats from '../cats/cats';
import Dogs from '../dogs/dogs';
import Home from '../home/home';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cats" component={Cats} />
      <Route path="/dogs" component={Dogs} />
    </Switch>
  </main>
);

export default Main;
