import React, { ReactNode, FC } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography, makeStyles, createStyles } from '@mui/material';
import style from '../Header/Header.module.css'


type Props = {
  children: ReactNode;
};


const Layout: FC<Props> = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Head>
        <title>Carrectly - Car Service on demand</title>
        <meta name="andre" content="initial-scale=1, width=device-width" />
      </Head>
      <AppBar position="static" className={style.nav}>
        <Toolbar>
          <Typography>Carrectly</Typography>
        </Toolbar>

      </AppBar>
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
