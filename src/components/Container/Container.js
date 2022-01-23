import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.css';

export default function Container({ children }) {
  return (
    <div className={styles.container} data-testid="container">
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.array.isRequired,
};
