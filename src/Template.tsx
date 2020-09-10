import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'view/Home';
import { PrivateRoute } from 'component/PrivateRoute';

const Template = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Template;
