/* eslint-disable func-call-spacing */
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from './components/Loader/Loader';

const AppBar = lazy(() =>
  import('./components/AppBar/AppBar' /*webpackChunkName: "app-bar"*/),
);
const Container = lazy(() =>
  import('./components/Container/Container' /*webpackChunkName: "container"*/),
);
const NewsView = lazy(() =>
  import('./views/NewsView/NewsView' /*webpackChunkName: "news-view"*/),
);
const ProfileView = lazy(() =>
  import(
    './views/ProfileView/ProfileView' /*webpackChunkName: "profile-view"*/
  ),
);

export default function App() {
  return (
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
  );
}
