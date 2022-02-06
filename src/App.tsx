/* eslint-disable object-curly-newline */
import { lazy, Suspense, createContext, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Loader from './components/Loader/Loader';
import GlobalStyle from './styled/Global';
import { theme } from './components/Theme/StyledTheme';
import { Theme, ContextTheme } from './types/types';

const AppBar = lazy(
  () => import('./components/AppBar/AppBar' /*webpackChunkName: "app-bar"*/),
);
const Container = lazy(
  () =>
    import(
      './components/Container/Container' /*webpackChunkName: "container"*/
    ),
);
const NewsView = lazy(
  () => import('./pages/NewsView/NewsView' /*webpackChunkName: "news-view"*/),
);
const ProfileView = lazy(
  () =>
    import(
      './pages/ProfileView/ProfileView' /*webpackChunkName: "profile-view"*/
    ),
);

export const ThemeContext = createContext<ContextTheme>({
  value: 'light',
  setThemeValue: null,
});

export default function App() {
  const [themeValue, setThemeValue] = useState<keyof Theme>('light'); // "light" | "dark"
  return (
    <>
      <ThemeContext.Provider value={{ value: themeValue, setThemeValue }}>
        <ThemeProvider theme={theme[themeValue]}>
          <GlobalStyle />
          <Suspense fallback={<Loader />}>
            <Container>
              <AppBar />

              <Switch>
                <Route path="/profile/:uniqueId">
                  <ProfileView />
                </Route>

                <Route path="/">
                  <NewsView />
                </Route>
              </Switch>
            </Container>
          </Suspense>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
