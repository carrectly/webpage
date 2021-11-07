import React, { ReactNode, FC } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography, makeStyles, Link, Theme, Box, LinkProps, BottomNavigation} from '@mui/material';
import style from './Layout.module.css'
import StyledNavBar from '../Header/StyledAppBar'
import { styled } from '@mui/material/styles';
import NextLink from 'next/link'

type Props = {
  children: ReactNode;
};

const StyledLink = styled(Link)<LinkProps>({
  color: 'white',
  padding: 10,
})


const Layout: FC<Props> = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Head>
        <title>Carrectly - Car Service on demand</title>
        <meta name="andre" content="initial-scale=1, width=device-width" />
      </Head>
      <AppBar>
        {/* <Toolbar className={style.nav}> */}
        <Toolbar>
          <Box display='flex' flexDirection='row'>
            <NextLink href="/" passHref>
              <StyledLink>Home</StyledLink>
            </NextLink>
            <NextLink href="/about" passHref>
              <StyledLink>About</StyledLink>
            </NextLink>
            <NextLink href="/services" passHref>
              <StyledLink>Services</StyledLink>
            </NextLink>
            </Box>
        </Toolbar>

      </AppBar>
      <Container sx={{minHeight: '90vh'}}>
        {children}
      </Container>
      <Footer className={style.footer}/>
    </>
  );
};

export default Layout;
