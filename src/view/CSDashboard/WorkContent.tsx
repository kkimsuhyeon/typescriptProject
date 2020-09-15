import React from 'react';
import styled from 'styled-components';
import proptype from 'prop-types';

const ContentTitle = styled.div`
  font-size: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const ContentList = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-right: 1px solid black;
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

const WorkContent = ({
  title,
  request,
  data,
}: {
  title: string;
  request: () => void;
  data: { [key: string]: string };
}) => {
  console.log(data);
  return (
    <ContentWrapper>
      <ContentTitle>{title}</ContentTitle>
      <ContentList>
        <ContentCount>
          <span>{data?.email || 0}</span>
          <span>건</span>
        </ContentCount>
        <ContentCount>
          <span>{data?.kyc || 0}</span>
          <span>건</span>
        </ContentCount>
        <ContentCount>
          <span>{data?.address || 0}</span>
          <span>건</span>
        </ContentCount>
      </ContentList>
      <ContentList>test</ContentList>
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
