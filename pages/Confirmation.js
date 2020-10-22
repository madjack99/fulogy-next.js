import React from 'react';

import styles from '../styles/Confirmation.module.css';

const Confirmation = ({ name, email, mobile, setDisplayConfirmation }) => {
  console.log(name, email, mobile);

  const saveData = () => {
    localStorage.setItem('UserInfo', JSON.stringify({ name, email, mobile }));
  };

  return (
    <div className={styles.confirmationWrapper}>
      <div className={styles.confirmationModal}>
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
      </div>
    </div>
  );
};

export default Confirmation;
