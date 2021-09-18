import styled from 'styled-components';
import { useActions } from '../hooks/use-actions';
const Button = styled.button`
  background-color: #009879;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  width: 135px;
`;
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #009879;
  width: 135px;
  z-index: 20;
  button:hover {
    background-color: #ddd;
  }
`;
const Wrapper = styled.div`
  width: 135px;
  position: relative;
  display: inline-block;
  &:hover ${DropdownContent} {
    display: flex;
    flex-direction: column;
  }
`;

const Dropdown: React.FC = () => {
  const { filterUsers } = useActions();
  return (
    <Wrapper>
      <Button>Filter by state</Button>
      <DropdownContent>
        <Button onClick={() => filterUsers('All', 'state')}>All</Button>
        <Button onClick={() => filterUsers('WI', 'state')}>WI</Button>
        <Button onClick={() => filterUsers('TN', 'state')}>TN</Button>
        <Button onClick={() => filterUsers('FL', 'state')}>FL</Button>
        <Button onClick={() => filterUsers('NE', 'state')}>NE</Button>
      </DropdownContent>
    </Wrapper>
  );
};

export default Dropdown;
