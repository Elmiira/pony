import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Game from 'containers/Pony/Loadable';
import * as Routes from './Routes.json';

export const PublicRoutes = () => (
  <Switch>
    {routes.map(route => (
      <Route
        key={route.path}
        // path={`${match.url}${route.path}`}
        exact={route.exact}
        component={route.component}
      />
    ))}
  </Switch>
);

const routes = [
  { path: Routes.Game, exact: true, component: Game },
];
