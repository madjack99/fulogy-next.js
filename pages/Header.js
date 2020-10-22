import React from 'react';
import { useStore } from 'effector-react';

import { $userInfoStore } from '../stores/userInfoStore';

import styles from '../styles/Header.module.css';

const Header = () => {
  const { name } = useStore($userInfoStore);
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
      <p className={styles.person}>{name}</p>
    </header>
  );
};

export default Header;
