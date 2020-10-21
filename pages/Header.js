import React from 'react';

import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.notification}
        src='./notifications.svg'
        alt='notification bell'
      />
      <img
        className={styles.avatar}
        src='/avatar-small.svg'
        alt='avatar small'
      />
      <p className={styles.person}>John Doe</p>
    </header>
  );
};

export default Header;
