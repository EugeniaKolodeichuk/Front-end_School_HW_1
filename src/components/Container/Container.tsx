import { Properties } from '../../types/types';
import StyledContainer from './StyledContainer';

export default function Container({ children }: Properties) {
  return <StyledContainer data-testid="container">{children}</StyledContainer>;
}
