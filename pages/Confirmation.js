import React, { useState } from 'react';

import { updateUserInfo } from '../stores/userInfoStore';
import { toggleEdit } from '../stores/editStore';

import styles from '../styles/Confirmation.module.css';

const Confirmation = ({ name, email, mobile, setDisplayConfirmation }) => {
  const [displayAlert, setDisplayAlert] = useState(false);

  const saveData = () => {
    localStorage.setItem('UserInfo', JSON.stringify({ name, email, mobile }));
    updateUserInfo({ name, email, mobile });
    setDisplayAlert(true);
  };

  const closeEditMenu = () => {
    toggleEdit();
  };

  return (
    <div className={styles.confirmationWrapper}>
      <div className={styles.confirmationModal}>
        {displayAlert ? (
          <>
            <span className={styles.confirmText}>Данные успешно сохранены</span>
            <button className={styles.saveBtn} onClick={closeEditMenu}>
              Хорошо
            </button>
          </>
        ) : (
          <>
            <span className={styles.confirmText}>Сохранить изменения?</span>
            <button className={styles.saveBtn} onClick={saveData}>
              Сохранить
            </button>
            <button
              className={styles.cancelBtn}
              onClick={() => setDisplayConfirmation(false)}
            >
              Не сохранять
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Confirmation;
