import React from 'react';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Signin from 'view/Signin';
import { RootState } from 'reducer';
import Template from './Template';
import Alert from 'component/Alert';
import { GlobalStyle } from 'lib/style/GlobalStyle';

const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;

const App = () => {
  const { isLogin } = typedUseSelector((state: RootState) => {
    return state.user;
  });
  const { isOpen } = typedUseSelector((state: RootState) => {
    return state.alert;
  });

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>{isLogin ? <Template /> : <Signin />}</BrowserRouter>
      {isOpen && <Alert />}
    </>
  );
};

export default App;
