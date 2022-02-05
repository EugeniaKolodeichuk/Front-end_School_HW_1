import { useContext } from 'react';
import { ThemeContext } from '../../App';
import {
  StyledSunIcon,
  StyledButton,
  ToggleContainer,
  StyledMoonIcon,
} from './StyledToggle';

export default function ThemeToggle() {
  const { value, setThemeValue } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (setThemeValue) {
      if (value === 'light') {
        setThemeValue('dark');
      } else {
        setThemeValue('light');
      }
    }
  };

  return (
    <StyledButton onClick={toggleTheme}>
      <ToggleContainer>
        <StyledSunIcon />
        <StyledMoonIcon />
      </ToggleContainer>
    </StyledButton>
  );
}
