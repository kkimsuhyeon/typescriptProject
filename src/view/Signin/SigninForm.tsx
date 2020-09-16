import React from 'react';
import styled from 'styled-components';
import { Div } from 'lib/style/styled';
import SigninInputForm from './SignInputForm';

const Label = styled.label`
  display: block;
  color: white;
  margin-bottom: 20px;
  font-size: 24;
`;

const Button = styled.button`
  all: unset;
  background-color: white;
  text-align: center;
  height: 68px;
  border-radius: 4px;
  font-size: 24px;
  color: black;
  maring-top: 36px;
  cursor: pointer;
  width: 33rem;
`;

interface SigninFormProps {
  onChange: (name: 'id' | 'password', value: string) => void;
  value: { id: string; password: string };
  onSubmit: () => void;
};

const SigninForm = ({ onChange, value, onSubmit }: SigninFormProps) => {
  const { id, password } = value;

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Div>
          <Label>ID</Label>
          <SigninInputForm onChange={onChange} value={id} name="id" />
        </Div>
        <Div>
          <Label>PASSWORD</Label>
          <SigninInputForm onChange={onChange} value={password} name="password" />
        </Div>
        <Button>Login</Button>
      </form>
    </>
  );
};

export default SigninForm;
