import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'view/Home';
import { Topbar } from 'view/App';
import { PrivateRoute } from 'component/PrivateRoute';

const Template = () => {
  return (
    <>
      <Topbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" component={() => { return <div>test</div>; }} />
        <Route path="/test2" component={() => { return <div>test2</div>; }} />
        <Route path="/test3" component={() => { return <div>test3</div>; }} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default Template;
