import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../containers/Main';
import Item from '../components/Item';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/:item" component={Item} />
    </Switch>
);

export default Routes;
