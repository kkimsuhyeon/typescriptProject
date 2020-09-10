import React from 'react';
import styled from 'styled-components';
import { Div, Flex } from 'lib/style/styled';

import logo from 'assets/logo2.png';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  background-color: #1e3269;
  height: 100px;
`;

const Test = styled(Flex)`
  position: relative;
`;

const Img = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100px;
  height: 100px;
`;

const Topbar = () => {
  return (
    <Wrapper>
      <Test>
        <Img />
      </Test>
    </Wrapper>
  );
};

export default Topbar;
