import React from 'react';
import styled from 'styled-components';
import { Circle } from 'lib/style/shape';
import { Text } from 'lib/style/styled';
import { AxiosResponse } from 'axios';
import wonImage from 'assets/won.png';
import coinImage from 'assets/coin.png';
import emailImage from 'assets/email.png';
import { ManageResponse } from 'lib/api/csInfo';


const ManageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Test = styled.div`
  display: flex;
  margin: 20px 0 0 0;
`;

const ManageCount = styled.div`
  display: flex;
`;

const ManageContent = ({ request }: { request: () => Promise<AxiosResponse> }) => {
  const [fiat, setFiat] = React.useState<{ deposit: string; withdraw: string }>();
  const [coin, setCoin] = React.useState<{ deposit: string; withdraw: string }>();
  const [auth, setAuth] = React.useState<{ email: string }>();
  const [test, setTest] = React.useState<ManageResponse>()

  const callback = async () => {
    const response = await request();
    console.log(response.data);
    setTest(response.data);
    setFiat(response.data.Fiat);
    setCoin(response.data.Coin);
    setAuth(response.data.Auth);
  };

  React.useEffect(() => {
    callback();
  }, []);

  return (
    <ManageWrapper>
      <ManageTitle>
        <Circle width="80px" height="80px" backgroundColor="white">
          <img src={wonImage} alt="won" width="80" />
        </Circle>
        <Test>
          <Text>원화 입/출금</Text>
          <Text fontSize="1px" textAlign="bottom" margin="auto 0 0 0">
            (오늘 기준)
          </Text>
        </Test>
      </ManageTitle>
      <Content>
        <ManageCount>
          <Text>입금 완료 :</Text>
          <Text>{fiat?.deposit} 건</Text>
        </ManageCount>
        <ManageCount>
          <Text>입금 출금 :</Text>
          <Text>{fiat?.withdraw} 건</Text>
        </ManageCount>
      </Content>
      <ManageTitle>
        <Circle width="80px" height="80px" backgroundColor="white">
          <img src={coinImage} alt="coin" width="80" />
        </Circle>
        <Test>
          <Text>코인 입/출금</Text>
          <Text fontSize="1px" textAlign="bottom" margin="auto 0 0 0">
            (오늘 기준)
          </Text>
        </Test>
      </ManageTitle>
      <Content>
        <ManageCount>
          <Text>입금 완료 :</Text>
          <Text>{coin?.deposit} 건</Text>
        </ManageCount>
        <ManageCount>
          <Text>출금 완료 :</Text>
          <Text>{coin?.withdraw} 건</Text>
        </ManageCount>
      </Content>
      <ManageTitle>
        <Circle width="80px" height="80px" backgroundColor="white">
          <img src={emailImage} alt="email" width="80" />
        </Circle>
        <Test>
          <Text>이메일 인증</Text>
        </Test>
      </ManageTitle>
      <Content>
        <ManageCount>
          <Text>미완료 :</Text>
          <Text>{auth?.email} 건</Text>
        </ManageCount>
      </Content>
    </ManageWrapper>
  );
};

export default ManageContent;
