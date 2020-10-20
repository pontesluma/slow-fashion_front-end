import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import StoresMap from '../pages/StoresMap';
import Store from '../pages/Store';
import CreateStore from '../pages/CreateStore';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/map" component={StoresMap} />
        <Route path="/store/create" component={CreateStore} />
        <Route path="/store/:id" component={Store} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
