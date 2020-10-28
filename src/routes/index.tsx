import React from 'react';
import { Switch, Route, MemoryRouter, Redirect } from 'react-router-dom';

import Navigation from '../components/Navigation';
import Sheet from '../pages/Sheet';
import Overview from '../pages/Overview';


const Routes: React.FC = () => {
  return (
    <MemoryRouter>
      <Navigation />
      <Switch>
        <Redirect exact from="/" to="/overview" />
        <Route path="/overview" component={Overview} />
        <Route path="/:sheetId" component={Sheet} />
      </Switch>
    </MemoryRouter>
  );
};
export default Routes;
