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
interface InputProps {
  setCurrentPage: (arg: number) => void;
}
const Input: React.FC<InputProps> = ({setCurrentPage}) => {
  const { filterUsers } = useActions();
  const [inputFirstNameValue, setInputFirstNameValue] = useState('');
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterUsers(e.target.value,'firstName');
    setInputFirstNameValue(e.target.value);
    setCurrentPage(1)
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
