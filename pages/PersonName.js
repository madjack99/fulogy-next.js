import React from 'react';
import { useStore } from 'effector-react';

import { toggleEdit, $editStore } from '../stores/editStore';

import styles from '../styles/PersonName.module.css';

const PersonName = () => {
  const isEdit = useStore($editStore);
  console.log(isEdit);
  return (
    <div className={styles.personName}>
      <div className={styles.nameSection}>
        <img className={styles.avatar} src={'/avatar-large.svg'} alt='photo' />
        <span className={styles.firstName}>John Doe</span>
      </div>
      <div className={styles.editSection} onClick={toggleEdit}>
        <span className={styles.editBtn}>
          {isEdit ? 'ЗАКРЫТЬ' : 'РЕДАКТИРОВАТЬ'}
        </span>
        <img
          src={isEdit ? '/close.svg' : '/create.svg'}
          alt={isEdit ? 'close' : 'pen'}
        />
      </div>
    </div>
  );
};

export default PersonName;
