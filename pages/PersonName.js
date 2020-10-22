import React from 'react';
import { useStore } from 'effector-react';

import { toggleEdit, $editStore } from '../stores/editStore';
import { $userInfoStore } from '../stores/userInfoStore';

import styles from '../styles/PersonName.module.css';

const PersonName = () => {
  const isEdit = useStore($editStore);
  const { name } = useStore($userInfoStore);
  return (
    <div className={styles.personName}>
      <div className={styles.nameSection}>
        <img className={styles.avatar} src={'/avatar-large.svg'} alt='photo' />
        <span className={styles.firstName}>{name}</span>
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
