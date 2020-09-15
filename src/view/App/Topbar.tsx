import React from 'react';
import styled from 'styled-components';
import { Flex, Text } from 'lib/style/styled';
import { Circle } from 'lib/style/shape';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import logo from 'assets/logo_white.png';
import bell from 'assets/bell.png';
import movePage from 'assets/move_page.png';
import user from 'assets/user.png';

import { initializeUserInfo } from 'action/user';
import useUserInfo from 'lib/hook/useUserInfo';
import { initialState } from 'lib/stateLoader';

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

const Right = styled.div`
  margin-left: auto;
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

const DropDown = styled.div`
  width: 150px;
  position: absolute;
  background-color: #2d3539;
  color: white;
  z-index: 1;
  top: 50px;
  right: -20px;
  transition: 10s;
`;

const Topbar = ({ history }: RouteComponentProps) => {
  const [drop, setDrop] = React.useState(false);
  const dispatch = useDispatch();
  const { name } = useUserInfo();

  const handleClick = () => {
    // sessionStorage.clear();
    history.push('/');
  };

  const handleDropBox = () => {
    setDrop(!drop);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(initializeUserInfo());
    initialState();
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
        <Flex>
          <img src={bell} alt="bell" width="20" />
          <Text color="white">[알림]어어어어어엉어어어ㅓ어ㅓ어ㅓ어어ㅓ어ㅓ어어ㅓ엄청 긴 글</Text>
        </Flex>
      </Notice>
      <Right>
        <Button>
          <Flex margin="0 10px 0 0">
            <img src={movePage} alt="movePage" width="22" />
            <Text color="white" borderRight="solid" padding="0 10px 0 0">
              거래소 바로가기
            </Text>
          </Flex>
        </Button>
        <Flex>
          <Text color="white">{`${name} 님`}</Text>
        </Flex>
        <Circle
          width="45px"
          height="45px"
          backgroundColor="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin="0 0 0 10px"
        >
          <Button onClick={handleDropBox}>
            <img src={user} alt="test" width="35" height="35" />
          </Button>
          {drop && (
            <DropDown>
              <Text>비밀번호 수정</Text>
              <Text onClick={handleLogout}>로그아웃</Text>
            </DropDown>
          )}
        </Circle>
      </Right>
    </Wrapper>
  );
};

export default withRouter(Topbar);
