import React from 'react';
import { Properties } from '../../types/types';
/* import PropTypes from 'prop-types'; */
import styles from './Container.module.css';

/* type Properties = {
  children: ReactNode
} */

export default function Container({ children }: Properties) {
  return (
    <div className={styles.container} data-testid="container">
      {children}
    </div>
  );
}

/* type Props2 = {
  children: ReactNode
}
type FunctConp = (a: Props2) => ReactElement

const Header: FC = ({ children }) => <p>{children}</p>;

function Footer(props: Props2): ReactElement | string {
  if (!props.children) {
    return "sdfhsl"
  }
  return <p>{ props.children}</p>
} */

//const Header: FC = ({ children }) => <p>{children}</p>;

/* Container.propTypes = {
  children: PropTypes.array.isRequired,
}; */
