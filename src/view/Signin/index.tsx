import React from 'react';
import styled from 'styled-components';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

import backgroundImage from 'assets/background.png';
import logo from 'assets/logo.png';

import { Flex } from 'lib/style/styled';
import { login } from 'lib/api';
import { setToken, decodeToken } from 'lib/token';

import { changeInput, initializeInput } from 'action/signin';
import { updateUserInfo } from 'action/user';
import { openAlert } from 'action/alert';

import { RootState } from 'reducer';
import SigninForm from './SigninForm';

const Container = styled(Flex)`
  height: 100vh; // 1vh는 현재 화면의 1/100을 의미한다.
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 70px;
`;

const Signin = () => {
  const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;
  const dispatch = useDispatch();

  const authInfo = typedUseSelector((state: RootState) => {
    return state.signin.form;
  });

  const { id, password } = authInfo;

  const handleChange = (name: 'id' | 'password', value: string): void => {
    dispatch(changeInput({ name, value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await login({ id, password });
      setToken(response.data.access_token);
      dispatch(updateUserInfo(decodeToken(response.data.access_token)));
      dispatch(initializeInput());
    } catch (error) {
      dispatch(openAlert({ value: error.message }));
      dispatch(initializeInput());
    }
  };

  if (sessionStorage.getItem('token') !== null) {
    dispatch(updateUserInfo(decodeToken(sessionStorage.getItem('token') as string)));
  }

  return (
    <Container>
      <Flex flexGrow="1">
        <img src={logo} alt="logo" />
      </Flex>
      <Flex flexGrow="1" flexDirection="column">
        <SigninForm onChange={handleChange} value={authInfo} onSubmit={handleSubmit} />
      </Flex>
    </Container>
  );
};

export default Signin;
