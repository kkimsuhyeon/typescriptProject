import React from 'react';
import styled from 'styled-components';
import { Flex, Text } from 'lib/style/styled';
import { Circle } from 'lib/style/shape';
import useUserInfo from 'lib/hook/useUserInfo';
import SidebarContent from './SidebarContent';

const Wrapper = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #3f4b5c;
  width: 180px;
  padding-top: 40px;
  z-index: 998;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const Profile = styled(Flex)`
  width: 100%;
  height: 200px;
  flex-direction: column;
`;

const SideBar = () => {
  const { name, role } = useUserInfo();

  return (
    <Wrapper>
      <Content>
        <Profile>
          <Circle
            width="85px"
            height="85px"
            backgroundColor="#dcdcdc"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="30px" fontWeight="bold">
              {name[0].toUpperCase()}
            </Text>
          </Circle>
          <div>{role === 'CS' ? `${role} 관리자` : `${role}`}</div>
          <div>{`${name} 님`}</div>
        </Profile>
        <Flex flexDirection="column">
          <SidebarContent
            title="Dashboard"
            content={[
              { subTitle: '거래소 요약', path: '/TradeDashboard' },
              { subTitle: 'CS 관리 요약', path: '/CSDashboard' },
            ]}
          />
          <SidebarContent
            title="CS 관리"
            content={[
              { subTitle: '원화 관리', path: '/test' },
              { subTitle: '코인 관리', path: '/test2' },
              { subTitle: '인증 관리', path: '/test3' },
            ]}
          />
        </Flex>
      </Content>
    </Wrapper>
  );
};

export default SideBar;
