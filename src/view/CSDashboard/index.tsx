import React from 'react';
import styled from 'styled-components';
import { getAuthWork, getCoinWork, getFiatWork, getQnaWork } from 'lib/api';
import { AuthWorkResponse, CoinWorkResponse, FiatWorkResponse, QnaWorkResponse } from 'lib/api/csInfo';
import WorkContent from './WorkContent';
import { Circle } from 'lib/style/shape';
import { Text } from 'lib/style/styled';
import ManageContent from './ManageContent'

const Title = styled.div`
  margin: 20px;
  font-size: 30px;
  font-weight: bold;
`;

const WorkList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const ManageList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;

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

const ManageCount = styled.div``;

const CSDashboard = () => {
  return (
    <Wrapper>
      <Title>처리해야 할 일</Title>
      <WorkList>
        <WorkContent title="원화 관리" request={getFiatWork} />
        <WorkContent title="코인 관리" request={getCoinWork} />
        <WorkContent title="인증 관리" request={getAuthWork} />
        <WorkContent title="고객 문의 관리" request={getQnaWork} />
      </WorkList>
      <Title>운영 현황</Title>
      <ManageList>
       <ManageContent />
       <ManageContent />
       <ManageContent />
      </ManageList>
    </Wrapper>
  );
};

export default CSDashboard;
