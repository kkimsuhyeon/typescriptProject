import React from 'react';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Signin from 'view/Signin';
import { RootState } from 'reducer';
import Template from './Template';

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

const App = () => {
  const isLogin = typedUseSelector((state: RootState) => { return state.user.isLogin; });
  return <BrowserRouter>{isLogin ? <Template /> : <Signin />}</BrowserRouter>;
};

export default App;
