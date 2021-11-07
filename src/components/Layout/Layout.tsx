import React, { ReactNode, FC } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Head from 'next/head';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  makeStyles,
  Link,
  Theme,
  Box,
  LinkProps,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import style from './Layout.module.css';
import StyledNavBar from '../Header/StyledAppBar';
import { styled } from '@mui/material/styles';
import NextLink from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleMapReact from 'google-map-react';

type Props = {
  children: ReactNode;
};

const StyledLink = styled(Link)<LinkProps>({
  color: 'white',
  padding: 10,
});

const Layout: FC<Props> = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Head>
        <title>Carrectly - Car Service on demand</title>
        <meta name="andre" content="initial-scale=1, width=device-width" />
      </Head>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          {/* <Toolbar className={style.nav}> */}
          <Toolbar>
            <Box display="flex" flexDirection="row">
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
        <Container>{children}</Container>
        <BottomNavigation showLabels value={'Developed by AB'} sx={{backgroundColor: 'primary.main'}}>
          <BottomNavigationAction label={<span>773.800.9085 | info@carrectly.com</span>} showLabel  sx={{color: 'white'}} />
          <StyledLink href='https://www.facebook.com/Carrectly' target='_blank'><BottomNavigationAction label="Facebook" showLabel  sx={{color: 'white'}} icon={<FacebookIcon color="secondary" />} /></StyledLink>
          <StyledLink href='https://twitter.com/Carrectly' target='_blank'><BottomNavigationAction label="Twitter" showLabel  sx={{color: 'white'}} icon={<TwitterIcon color="secondary" />} /></StyledLink>
          <StyledLink href='https://www.instagram.com/carrectly/' target='_blank'><BottomNavigationAction label="Instagram" showLabel  sx={{color: 'white'}} icon={<InstagramIcon color="secondary" />} /></StyledLink>
          <StyledLink href='https://www.linkedin.com/company/carrectly/' target='_blank'><BottomNavigationAction label="LinkedIn" showLabel  sx={{color: 'white'}} icon={<LinkedInIcon color="secondary" />} /></StyledLink>
        </BottomNavigation>

        {/* <Footer className={style.footer} /> */}
      </Box>
    </>
  );
};

export default Layout;
