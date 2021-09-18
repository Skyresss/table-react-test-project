import { useActions } from '../hooks/use-actions';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
interface FilterButtonProps {
  value: 'firstName' | 'state' | 'id' | 'lastName' | 'phone' | 'email';
  direction: 'ascending' | 'descending';
  setDirection: (arg: 'ascending' | 'descending') => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  value,
  direction,
  setDirection,
}) => {
  const { filterColumns } = useActions();
  return (
    <div style={{ display: 'inline' }}>
      {direction === 'ascending' ? (
        <FaAngleUp
          onClick={() => {
            filterColumns(direction, value);
            direction === 'ascending'
              ? setDirection('descending')
              : setDirection('ascending');
          }}
        />
      ) : (
        <FaAngleDown
          onClick={() => {
            filterColumns(direction, value);
            direction === 'descending'
              ? setDirection('ascending')
              : setDirection('descending');
          }}
        />
      )}
    </div>
  );
};

export default FilterButton;
