import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import StyledLoader from './StyledLoader';

const Loader = () => {
  return (
    <StyledLoader data-testid="loader">
      <Spinner type="BallTriangle" color="#005eaa" height={100} width={100} />
    </StyledLoader>
  );
};

export default Loader;
