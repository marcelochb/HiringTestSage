import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';

import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
    </Switch>
  );
}
