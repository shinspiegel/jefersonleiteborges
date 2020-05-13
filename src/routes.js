import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
