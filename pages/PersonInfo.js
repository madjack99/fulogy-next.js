import React from 'react';
import styles from '../styles/PersonInfo.module.css';

const PersonInfo = () => {
  return (
    <div className={styles.personInfo}>
      <div className={styles.infoItem}>
        <img className={styles.infoImage} src='/email.svg' alt='email' />
        <span>Ivanova@mail.ru</span>
      </div>
      <div className={styles.infoItem}>
        <img className={styles.infoImage} src='/mobile.svg' alt='mobile' />
        <span>Укажите номер телефона</span>
      </div>
    </div>
  );
};

export default PersonInfo;
