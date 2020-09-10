import React from 'react';
import { Route } from 'react-router-dom';

export const PrivateRoute = ({
  component: Component,
  render = null,
  previousPath = [],
  fallbackPath = '/',
  isLoggedIn = null,
  ...rest
}) => {
  console.log(rest);
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};
