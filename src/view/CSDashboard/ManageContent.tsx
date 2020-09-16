import React from 'react';
import styled from 'styled-components';
import { Circle } from 'lib/style/shape';
import { Text } from 'lib/style/styled';

const ManageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 50%;
`;

const ManageTitle = styled.div`
  font-size: 20px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 50%;
  border-left: 1px solid black;
  padding-left: 80px;
`;

const ManageCount = styled.div``;

const ManageContent = () => {
  return (
    <ManageWrapper>
      <ManageTitle>
        <Circle width="80px" height="80px" backgroundColor="red" />
        <Text>원화 입/출금</Text>
        <Text>(오늘 기준)</Text>
      </ManageTitle>
      <Content>
        <ManageCount>출금 완료 0건</ManageCount>
        <ManageCount>입금 완료 0건</ManageCount>
      </Content>
    </ManageWrapper>
  );
};

export default ManageContent;
