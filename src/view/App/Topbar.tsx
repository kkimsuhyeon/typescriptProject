import React from 'react';
import styled from 'styled-components';
import { Div, Flex } from 'lib/style/styled';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import logo from 'assets/logo_white.png';
import bell from 'assets/bell.png';
import movePage from 'assets/move_page.png';
import user from 'assets/user.png';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  background-color: #2d3539;
  height: 55px;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  display: inline-block;
  margin-left: 30px;
  margin-right: 100px;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items:center;
  border
`;

const Notice = styled.div`
  display: flex;
`;

const Text = styled.div`
  height: 100%;
  margin-left: 10px;
  color: white;
  text-align: center;
`;

const Right = styled.div`
  margin-left: auto;
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

const Topbar = ({ history }: RouteComponentProps) => {
  const handleClick = () => {
    sessionStorage.clear();
    history.push('/');
  };

  return (
    <Wrapper>
      <Logo>
        <Button onClick={handleClick}>
          <img src={logo} alt="logo" width="100" />
        </Button>
      </Logo>
      <Notice>
        <img src={bell} alt="bell" width="18" />
        <Text>[알림]어어어어어엉어어어ㅓ어ㅓ어ㅓ어어ㅓ어ㅓ어어ㅓ엄청 긴 글</Text>
      </Notice>
      <Right>
        <Button>
          <img src={movePage} alt="movePage" width="18" />
          <Text>거래소 바로가기</Text>
        </Button>

        <Text>누구누구 님</Text>
      </Right>
    </Wrapper>
  );
};

export default withRouter(Topbar);
