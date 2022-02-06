import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  padding: 20px;
  font-weight: 500;
  color: ${properties => properties.theme.color};

  &:hover {
    color: #005eaa;
  }
`;
export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 36px;
`;
