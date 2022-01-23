import React from 'react';

import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav className={styles.navigation} data-testid="navigation">
    <NavLink
      exact
      to="/"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Trends
    </NavLink>
  </nav>
);

export default Navigation;
