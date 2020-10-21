import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  wrapper: {
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
      <Button variant='contained' color='primary'>
        Primary
      </Button>
    </div>
  );
}
