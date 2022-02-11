import StyledAppBar from './StyledAppBar';
import Navigation from '../Navigation/Navigation';

export default function AppBar() {
  return (
    <StyledAppBar data-testid="header">
      <Navigation />
    </StyledAppBar>
  );
}
