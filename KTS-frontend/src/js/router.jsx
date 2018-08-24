import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/exception/not-found';
import App from './containers/app';
export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);
