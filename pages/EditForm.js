import React, { useState } from 'react';

import Confirmation from './Confirmation';

import TextField from '@material-ui/core/TextField';

import styles from '../styles/EditForm.module.css';

const EditForm = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [mobile, setMobile] = useState('');
  const [mobileError, setMobileError] = useState(false);

  const [displayConfirmation, setDisplayConfirmation] = useState(false);

  const handleNameChange = (e) => {
    setNameError(false);
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailError(false);
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobileError(false);
    setMobile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameValid = name.length > 2;
    if (!nameValid) setNameError(true);

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) setEmailError(true);

    const mobileValid = /^[- +()]*[0-9][- +()0-9]*$/.test(mobile);
    if (!mobileValid) setMobileError(true);

    if (nameValid && emailValid && mobileValid) {
      setDisplayConfirmation(true);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.fieldsWrapper}>
        <div className={styles.formItem}>
          <img src='/form-name.svg' alt='name badge' />
          <TextField
            error={nameError}
            helperText={nameError ? 'Вы неверно указали имя' : ''}
            required
            id='outlined-required'
            label='Фамилия и имя'
            placeholder='Укажите ваши фамилию и имя'
            variant='outlined'
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className={styles.formItem}>
          <img src='/form-mail.svg' alt='email' />
          <TextField
            error={emailError}
            helperText={emailError ? 'Вы неверно указали почту' : ''}
            required
            id='outlined-required'
            label='E-mail'
            placeholder='Ivanova@mail.ru'
            variant='outlined'
            type='email'
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className={styles.formItem}>
          <img src='/form-mobile.svg' alt='mobile' />
          <TextField
            error={mobileError}
            helperText={mobileError ? 'Вы неверно указали телефон' : ''}
            required
            id='outlined-required'
            label='Номер телефона'
            placeholder='Укажите номер телефона'
            variant='outlined'
            value={mobile}
            onChange={handleMobileChange}
          />
        </div>
      </div>
      <button className={styles.submitBtn} type='submit'>
        Сохранить изменения
      </button>
      {displayConfirmation && (
        <Confirmation
          name={name}
          email={email}
          mobile={mobile}
          setDisplayConfirmation={setDisplayConfirmation}
        />
      )}
    </form>
  );
};

export default EditForm;
