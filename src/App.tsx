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
  const { fetchUsers, findAllStates } = useActions();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const renderUsers = async () => {
      await fetchUsers();
      await findAllStates();
    };
    renderUsers();
  }, []);

  return (
    <Wrapper>
      <Div>
        <Input setCurrentPage={ setCurrentPage}/>
        <Dropdown setCurrentPage={ setCurrentPage}/>
      </Div>
      <Table setCurrentPage={setCurrentPage} currentPage={ currentPage} showUser={setShowUserCard} />
      {showUserCard && <UserCard />}
    </Wrapper>
  );
};

export default App;
