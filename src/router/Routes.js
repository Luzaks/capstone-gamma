import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../containers/Main';
import Item from '../containers/Item';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/item/:id" component={Item} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
