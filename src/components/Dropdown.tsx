import styled from 'styled-components';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
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
interface DropdownProps {
  setCurrentPage: (arg: number) => void;
}
const Dropdown: React.FC<DropdownProps> = ({ setCurrentPage }) => {
  const { filterUsers } = useActions();
  const allStates = useTypedSelector(({ table }) => table!.states);
  return (
    <Wrapper>
      <Button>Filter by state</Button>

      <DropdownContent>
        <Button
          onClick={() => filterUsers('All', 'state') && setCurrentPage(1)}
        >
          All
        </Button>
        {allStates.map((state) => {
          return (
            <Button
              onClick={() => filterUsers(state, 'state') && setCurrentPage(1)}
            >
              {state}
            </Button>
          );
        })}
      </DropdownContent>
    </Wrapper>
  );
};

export default Dropdown;
