import styled from 'styled-components';
import { useTypedSelector } from '../hooks/use-typed-selector';

const Wrapper = styled.div`
  margin: 36px auto;
  max-width: 100%;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgb(0 0 0 / 25%);
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;
  font-family: sans-serif;
  border: 2px solid #009879;
`;
const UserCard: React.FC = () => {
  const foundUsers = useTypedSelector(({ table }) => table!.foundUserById);

  return (
    <Wrapper>
      <h1>Profile Info:</h1>
      <p>Selected Profile: {foundUsers!.firstName}</p>
      <p>Description: {foundUsers!.description}</p>
      <p>Address: {foundUsers!.adress.streetAddress}</p>
      <p>City: {foundUsers!.adress.city}</p>
      <p>State: {foundUsers!.adress.state}</p>
      <p>Index: {foundUsers!.adress.zip}</p>
    </Wrapper>
  );
};

export default UserCard;
