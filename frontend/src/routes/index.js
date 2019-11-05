import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';

import Dashboard from '~/pages/Dashboard';
import Create from '~/pages/Pessoas/Create';
import Update from '~/pages/Pessoas/Update';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/create" component={Create} />
      <Route path="/update" component={Update} />
    </Switch>
  );
}
