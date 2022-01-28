import React from 'react';
import { Properties } from '../../types/types';
import styles from './Container.module.css';

export default function Container({ children }: Properties) {
  return (
    <div className={styles.container} data-testid="container">
      {children}
    </div>
  );
}
