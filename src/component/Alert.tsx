import React from 'react';
import styled from 'styled-components';

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
  return (
    <Background>
      <Content>
        <div>아이디 / 비밀번호를 확인해주세요</div>
        <Button>확인</Button>
      </Content>
    </Background>
  );
};

export default Alert;
