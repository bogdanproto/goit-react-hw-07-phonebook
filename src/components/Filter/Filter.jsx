import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Label } from './Filter.styled';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const { filter } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = evt => dispatch(setFilter(evt.target.value));

  return (
    <Label>
      Find contacts:
      <input type="text" name="filter" value={filter} onChange={handleFilter} />
    </Label>
  );
};
