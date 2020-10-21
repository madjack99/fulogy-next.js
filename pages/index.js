import Head from 'next/head';

import Header from './Header';
import PageInfo from './PageInfo';
import PersonName from './PersonName';
import PersonInfo from './PersonInfo';

import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/Home.module.css';

const useStyles = makeStyles(() => ({
  wrapper: {
    padding: '20px 25px 0 35px',
    backgroundImage: `url('/background-image.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '100vh',
  },
}));

export default function Home() {
  const cl = useStyles();

  return (
    <div className={cl.wrapper}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <PageInfo />
      <PersonName />
      <PersonInfo />
    </div>
  );
}
