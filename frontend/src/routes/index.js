import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';

import Dashboard from '~/pages/Dashboard';
import Create from '~/pages/Pessoas/Create';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/create" component={Create} />
    </Switch>
  );
}
