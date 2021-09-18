import styled from 'styled-components';
import { useState } from 'react';
import { useActions } from '../hooks/use-actions';
const StyledInput = styled.input`
  border-radius: 10px;
  border: 2px solid #009879;
  font-size: 1.3em;
  background: none;
  box-shadow: none;
  outline: none;
`;

const Input: React.FC = () => {
  const { filterUsers } = useActions();
  const [inputFirstNameValue, setInputFirstNameValue] = useState('');
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterUsers(e.target.value,'firstName');
    setInputFirstNameValue(e.target.value);
  };

  return (
    <StyledInput
      placeholder="Enter First Name"
      value={inputFirstNameValue}
      onChange={inputHandler}
    />
  );
};

export default Input;
