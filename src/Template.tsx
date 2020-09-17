import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Home from 'view/Home';
import CSDashboard from 'view/CSDashboard';
import TradeDashboard from 'view/TradeDashboard';
import { Topbar, SideBar } from 'view/App';

const PageWrapper = styled.div`
  background-color: #edf0f5;
  width: calc(100vw - 180px);
  height: calc(100vh - 55px);
  margin-left: 180px;
  margin-top: 55px;
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
          <Route path="/test3" component={() => { return <div>test3</div>;}}/>
          <Redirect to="/" />
        </Switch>
      </PageWrapper>
    </>
  );
};

export default Template;
