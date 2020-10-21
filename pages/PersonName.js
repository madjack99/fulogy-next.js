import React from 'react';
import styles from '../styles/PersonName.module.css';

const PersonName = () => {
  return (
    <div className={styles.personName}>
      <div className={styles.nameSection}>
        <img className={styles.avatar} src={'/avatar-large.svg'} alt='photo' />
        <span className={styles.firstName}>John Doe</span>
      </div>
      <div className={styles.editSection}>
        <span className={styles.editBtn}>РЕДАКТИРОВАТЬ</span>
        <img src={'/create.svg'} alt='pen' />
      </div>
    </div>
  );
};

export default PersonName;
