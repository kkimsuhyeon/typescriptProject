import React from 'react';
import styled from 'styled-components';
import {
  getAuthWork, getCoinWork, getFiatWork, getQnaWork,
} from 'lib/api';
import WorkContent from './WorkContent';

const Title = styled.div`
  margin: 20px;
  font-size: 30px;
  font-weight: bold;
`;

const WorkList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CSDashboard = () => {
  const [AuthWork, setAuthWork] = React.useState();
  const [FiatWork, setFiatWork] = React.useState();
  const [CoinWork, setCoinWork] = React.useState();
  const [QnaWork, setQnaWork] = React.useState();

  const requestAuth = async () => {
    const response = await getAuthWork();
    setAuthWork(response.data);
  };

  const requestFiat = async () => {
    const response = await getFiatWork();
    setFiatWork(response.data);
  };

  const requestCoin = async () => {
    const response = await getCoinWork();
    setCoinWork(response.data);
  };

  const requestQna = async () => {
    const response = await getQnaWork();
    setQnaWork(response.data);
  };

  React.useEffect(() => {
    requestAuth();
    requestFiat();
    requestCoin();
    requestQna();
  }, []);

  return (
    <>
      <Title>처리해야 할 일</Title>
      <WorkList>
        <WorkContent title="FiatData" request={requestAuth} data={AuthWork} />
        <WorkContent title="CoinData" request={requestAuth} data={FiatWork} />
        <WorkContent title="AuthData" request={requestAuth} data={CoinWork} />
        <WorkContent title="QnaData" request={requestAuth} data={QnaWork} />
      </WorkList>
    </>
  );
};

export default CSDashboard;
