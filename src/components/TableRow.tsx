import { useActions } from '../hooks/use-actions';
import { User } from '../state/user';
interface TableRowProps {
  user: User;
  showUser: (arg:boolean) => void;
}

const TableRow: React.FC<TableRowProps> = ({ user,showUser }) => {
  const {findUserByID} = useActions();
  return (
    <tr onClick={() => findUserByID(user.id, user.firstName) && showUser(true)} >
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.adress.state}</td>
    </tr>
  );
};

export default TableRow;
