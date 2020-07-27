import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../containers/Main';
import Item from '../components/itemComponents/Item';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/item/:id" component={Item} />
  </Switch>
);

export default Routes;
