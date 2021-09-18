import { useEffect, useState } from 'react';
import { useActions } from './hooks/use-actions';
import styled from 'styled-components';
import Dropdown from './components/Dropdown';
import Table from './components/Table';
import Input from './components/Input';
import UserCard from './components/UserCard';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  padding: 30px 50px;
`;
const App: React.FC = () => {
  const [showUserCard, setShowUserCard] = useState(false);
  const { fetchUsers } = useActions();
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Wrapper>
      <Div>
        <Input />
        <Dropdown />
      </Div>
      <Table showUser={setShowUserCard} />
      {showUserCard && <UserCard />}
    </Wrapper>
  );
};

export default App;
