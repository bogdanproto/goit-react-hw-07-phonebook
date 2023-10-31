import { ThreeDots } from 'react-loader-spinner';
import LoaderStyled from './Loader.styled';

const Loader = () => {
  return (
    <LoaderStyled>
      <ThreeDots
        height="48"
        width="48"
        radius="9"
        color="#404143"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderStyled>
  );
};

export default Loader;
