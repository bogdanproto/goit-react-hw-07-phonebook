import { useSelector } from 'react-redux';
import { ErrorStyled } from './Error.styled';
import { selectError } from 'redux/selectors';

export const Error = () => {
  const error = useSelector(selectError);
  return (
    <ErrorStyled>
      <p>Something went wrong, try to reload the page</p>
      <p>{error}</p>
    </ErrorStyled>
  );
};

export default Error;
