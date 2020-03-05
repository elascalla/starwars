import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SWProvider from './context/Context';

import Dashboard from './pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <SWProvider>
        <Route path="/" exact={true} component={Dashboard} />
      </SWProvider>
    </Switch>
  );
}