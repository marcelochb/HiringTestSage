import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DefaultLayout from '~/pages/_layouts/default';

import Dashboard from '~/pages/Dashboard';
import Create from '~/pages/Pessoas/Create';
import Update from '~/pages/Pessoas/Update';

export default function Routes() {
  return (
    <Switch>
      <DefaultLayout>
        <Route path="/" exact component={Dashboard} />
        <Route path="/create" component={Create} />
        <Route path="/update" component={Update} />
      </DefaultLayout>
    </Switch>
  );
}
