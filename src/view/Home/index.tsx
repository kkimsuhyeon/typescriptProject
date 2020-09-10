import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { deleteToken } from 'lib/token';
import { useDispatch } from 'react-redux';
import { initializeUserInfo } from 'action/user';

const Home = ({ history }: RouteComponentProps) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>Home</div>
      <button
        type="button"
        onClick={() => {
          deleteToken();
          dispatch(initializeUserInfo());
          return history.push('/');
        }}
      >
        button
      </button>
    </>
  );
};

export default Home;
