import React from 'react';
import styled from 'styled-components';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 10px;
  border-bottom: 1px solid rgba(107, 104, 96, 0.5);
  color: white;
  cursor: pointer;

  &.active {
    border-bottom: none;
  }
`;

const NavTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavContent = styled.div`
  color: #bfbfbf;
  margin: 10px;
`;

const NavContents = styled.div`
  display: none;

  &.active {
    display: block;
    width: 91%;
    background-color: #445163;
    padding-left: 1rem;
  }
`;

type SidebarContentProps = {
  title?: string;
  content?: Array<{ subTitle: string; path: string }>;
} & RouteComponentProps;

const SidebarContent = ({ title, content, history }: SidebarContentProps) => {
  const [active, setActive] = React.useState(false);

  const openContent = () => {
    setActive(!active);
  };

  const handleClick = (path: string) => {
    history.push(path);
  };

  return (
    <>
      <NavWrapper onClick={openContent} className={active ? 'active' : 'inActive'}>
        <NavTitle>
          {title}
          {active ? <BsChevronUp /> : <BsChevronDown />}
        </NavTitle>
      </NavWrapper>
      <NavContents className={active ? 'active' : 'inActive'}>
        {content && content.map((items) => {
          return (
            <NavContent
              onClick={() => {
                return handleClick(items.path);
              }}
            >
              {items.subTitle}
            </NavContent>
          );
        })}
      </NavContents>
    </>
  );
};

export default withRouter(SidebarContent);
