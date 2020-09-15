import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Home from 'view/Home';
import CSDashboard from 'view/CSDashboard';
import TradeDashboard from 'view/TradeDashboard';
import { Topbar, SideBar } from 'view/App';

const PageWrapper = styled.div`
  padding-left: 180px;
  background-color: #edf0f5;
  padding-top: 55px;
  width: 107.7rem;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Template = () => {
  return (
    <>
      <Topbar />
      <SideBar />
      <PageWrapper>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/CSDashboard" component={CSDashboard} />
          <Route path="/TradeDashboard" component={TradeDashboard} />
          <Route
            path="/test3"
            component={() => {
              return <div>test3</div>;
            }}
          />
          <Redirect to="/" />
        </Switch>
      </PageWrapper>
    </>
  );
};

export default Template;
