import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { useTypedSelector } from '../hooks/use-typed-selector';
import TableRow from './TableRow';
import PageButtons from './PageButtons';
import FilterButton from './FilterButton';
const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  & tbody tr {
    border-bottom: 1px solid #dddddd;
  }
  & th {
    text-align: center;
  }
  & tbody td {
    text-align: center;
  }
  & tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  & tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
  & tbody tr:hover {
    color: #009879;
  }
  & thead tr {
    background-color: #009879;
    color: #ffffff;
  }
  & th td {
    padding: 12px 15px;
  }
  & tr {
    height: 50px;
  }
`;
interface TableProps {
  showUser: (arg: boolean) => void;
  setCurrentPage: (arg: number) => void;
  currentPage: number;
}
const Table: React.FC<TableProps> = ({
  showUser,
  setCurrentPage,
  currentPage,
}) => {
  const users = useTypedSelector(({ table }) => table?.filteredUsers);

  const [direction, setDirection] = useState<'ascending' | 'descending'>(
    'ascending'
  );

  const pagesCount = useMemo(
    () => Math.ceil(users ? users.length / 20 : 1),
    [users]
  );

  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <th>
              ID
              <FilterButton
                value={'id'}
                direction={direction}
                setDirection={setDirection}
              />
            </th>

            <th>
              First Name
              <FilterButton
                value={'firstName'}
                direction={direction}
                setDirection={setDirection}
              />
            </th>
            <th>
              Last Name
              <FilterButton
                value={'lastName'}
                direction={direction}
                setDirection={setDirection}
              />
            </th>
            <th>
              Email
              <FilterButton
                value={'email'}
                direction={direction}
                setDirection={setDirection}
              />
            </th>
            <th>
              Phone
              <FilterButton
                value={'phone'}
                direction={direction}
                setDirection={setDirection}
              />
            </th>
            <th>
              State
              <FilterButton
                value={'state'}
                direction={direction}
                setDirection={setDirection}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users
              .slice((currentPage - 1) * 20, currentPage * 20)
              .map((user) => (
                <TableRow
                  key={user.firstName + user.lastName + user.id}
                  user={user}
                  showUser={showUser}
                />
              ))}
        </tbody>
      </StyledTable>
      {pagesCount > 1 && (
        <PageButtons
          pagesCount={pagesCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};
export default Table;
