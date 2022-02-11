import styled from 'styled-components';
import { ReactComponent as MoonIcon } from '../../static/moon.svg';
import { ReactComponent as SunIcon } from '../../static/sun.svg';
import { LightTheme } from './StyledTheme';

export const StyledButton = styled.div`
  border: none;
  cursor: pointer;
  padding-right: 20px;
  padding-left: auto;
  background: ${(properties) => properties.theme.background};
  color: ${(properties) => properties.theme.color};
`;

export const ToggleContainer = styled.button`
  display: flex;
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  width: 4rem;
  height: 2rem;
`;

export const StyledSunIcon = styled(SunIcon)`
  height: auto;
  width: 2rem;
  transition: all 0.3s linear;
  transform: ${(properties) =>
    (properties.theme === LightTheme ? 'translateY(0)' : 'translateY(100px)')};
`;

export const StyledMoonIcon = styled(MoonIcon)`
  height: auto;
  width: 2rem;
  transition: all 0.3s linear;
  transform: ${(properties) =>
    (properties.theme === LightTheme ? 'translateY(-100px)' : 'translateY(0)')};
`;
