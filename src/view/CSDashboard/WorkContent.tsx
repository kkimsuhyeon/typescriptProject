import React from 'react';
import styled from 'styled-components';
import proptype from 'prop-types';
import { Text } from 'lib/style/styled';
import reload from 'assets/reload.png';
import { AxiosResponse } from 'axios';
import { AuthWorkResponse, CoinWorkResponse, FiatWorkResponse, QnaWorkResponse } from 'lib/api/csInfo';

const SUB_TITLE = {
  deposit_wait: '입금 대기',
  whitdraw_wait: '출금 대기',
  remittance_wait: '송금 대기',
  remittance_fail: '송금 실패',
  withdraw_wait: '출금 승인 대기',
  kyc: 'KYC',
  address: '거주지',
  qna: 'QNA',
};

const ContentTitle = styled.div`
  font-size: 20px;
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border-right: 1px solid black;
`;

const ContentList = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ContentCount = styled.div`
  & > span:first-child {
    color: #477bc4;
    font-size: 40px;
    margin-right: 5px;

    &:hover {
      border-bottom: 1px solid #477bc4;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  position: absolute;
  right: 10px;
  display: block;
  width: 40px;
  height: 40px;
`;

type dataState = AuthWorkResponse | CoinWorkResponse | FiatWorkResponse | QnaWorkResponse;

const WorkContent = ({ title, request }: { title: string; request: () => Promise<AxiosResponse> }) => {
  const [data, setData] = React.useState<dataState | undefined>();

  const handleReload = async () => {
    const response = await request();
    setData(response.data);
  };

  React.useEffect(() => {
    handleReload();
  }, []);

  return (
    <ContentWrapper>
      <ContentTitle>
        <Text>{title}</Text>
        <Button onClick={handleReload}>
          <img src={reload} alt="reload" width="30" />
        </Button>
      </ContentTitle>
      <ContentList>
        {data &&
          Object.keys(data).map(item => (
            <Content>
              <ContentCount>
                <span>{data[item]}</span>
                <span>건</span>
              </ContentCount>
              <Text fontSize="12px" margin="15px 0 0 0">
                {SUB_TITLE[item]}
              </Text>
            </Content>
          ))}
      </ContentList>
    </ContentWrapper>
  );
};

WorkContent.propTypes = {
  title: proptype.string,
  request: proptype.func,
  data: proptype.object,
};

WorkContent.defaultTypes = {
  title: '',
  request: () => {},
  data: {},
};

export default WorkContent;
