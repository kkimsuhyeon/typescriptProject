import React from 'react';
import styled from 'styled-components';
import { getAuthWork, getCoinWork, getFiatWork, getQnaWork, getManage } from 'lib/api';
import WorkContent from './WorkContent';
import ManageContent from './ManageContent';

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding: 30px;
`;

const WorkList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const ManageList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;

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
        <ManageContent request={getManage} />
      </ManageList>
    </Wrapper>
  );
};

export default CSDashboard;
