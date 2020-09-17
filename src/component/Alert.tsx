import React from 'react';
import styled from 'styled-components';
import { closeAlert } from 'action/alert';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import { RootState } from 'reducer';

const Background = styled.div`
  position: fixed;
  overflow: hidden;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  background-color: white;
  position: absolute;
  margin-top: 100px;
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10%;
`;

const Button = styled.div`
  background-color: black;
  margin-top: 40px;
  width: 100px;
  height: 50px;
`;

const Alert = () => {
  const typedUseSelector: TypedUseSelectorHook<RootState> = useSelector;
  const dispatch = useDispatch();

  const value = typedUseSelector((state: RootState) => {
    return state.alert.value
  })


  const handleClick = () => {
    dispatch(closeAlert());
  };
  return (
    <Background>
      <Content>
        <div>{value}</div>
        <Button onClick={handleClick}>확인</Button>
      </Content>
    </Background>
  );
};

export default Alert;
