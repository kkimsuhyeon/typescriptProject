import React from 'react';
import { Input } from 'lib/style/styled';

type SigninInputFormProps = {
  onChange: (name: 'id' | 'password', value: string) => void;
  name: 'id' | 'password';
  value: string;
};

const SigninInputForm = ({ onChange, name, value }: SigninInputFormProps) => {
  const [type, placeholder]: ['id' | 'password', string] = name === 'id' ? ['id', '아이디를 입력해주세요'] : ['password', '비밀번호를 입력해주세요'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(type, e.target.value);
  };

  return (
    <Input
      type={type}
      placeholder={placeholder}
      height="24px"
      width="29.3rem"
      padding="28px; 24px;"
      fontSize="24px"
      margin="0 0 24px 0;"
      onChange={handleChange}
      value={value}
    />
  );
};

export default SigninInputForm;
