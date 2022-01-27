import React from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={styles.header} data-testid="header">
      <Navigation />
    </header>
  );
}
