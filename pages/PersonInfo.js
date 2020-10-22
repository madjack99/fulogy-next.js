import React from 'react';
import { useStore } from 'effector-react';

import { $editStore } from '../stores/editStore';
import EditForm from './EditForm';

import styles from '../styles/PersonInfo.module.css';

const PersonInfo = () => {
  const isEdit = useStore($editStore);

  const renderPersonInfo = () => (
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

  return isEdit ? <EditForm /> : renderPersonInfo();
};

export default PersonInfo;
