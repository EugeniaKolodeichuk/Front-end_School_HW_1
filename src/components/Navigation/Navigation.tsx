import { StyledNavigation, StyledLink } from './StyledNavigation';
import ThemeToggle from '../Theme/ThemeToggle';

const Navigation = () => (
  <>
    <StyledNavigation data-testid="navigation">
      <StyledLink exact to="/">
        TikTuk trends
      </StyledLink>
    </StyledNavigation>
    <ThemeToggle />
  </>
);

export default Navigation;
