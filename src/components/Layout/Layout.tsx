import React, { ReactNode, FC } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography, makeStyles, createStyles, Theme } from '@mui/material';
import style from '../Header/Header.module.css'
import StyledNavBar from '../Header/StyledAppBar'
import { styled } from '@mui/material/styles';
import Link from 'next/link'

type Props = {
  children: ReactNode;
};

const Root = styled('div')({
  display: 'flex',
  background: 'green',
  height: '100vh'
})


const Layout: FC<Props> = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Head>
        <title>Carrectly - Car Service on demand</title>
        <meta name="andre" content="initial-scale=1, width=device-width" />
      </Head>
      <Root>
        {/* <Header/> */}
      <AppBar >
        <Toolbar className={style.nav}>
          <Typography>Carrectly</Typography>
          <ul>
            <li>
            <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </Toolbar>

      </AppBar>
      <Container>
        {children}
      </Container>
      </Root>
      <Footer />
    </>
  );
};

export default Layout;
