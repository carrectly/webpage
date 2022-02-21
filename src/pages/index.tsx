import type { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import { Box, Typography, Fab } from '@mui/material';
import Layout from '../components/Layout/Layout';
import styles from '../../styles/Layout.module.css';
import BgImage from '../components/BgImage/BgImage';
import howItWorksArr from '../data/howItWorks.json';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import StyledCarouselComponent from '../components/StyledCarousel/StyledCarousel';
import { SxProps } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';
import GoogleMapIframe from 'components/Map/GoogleMapIframe';
import YelpReviews from 'components/Yelp/YelpReviews';

const fabStyle = {
  zIndex: 35,
  margin: '0px',
  top: 'auto',
  right: '25px',
  bottom: '70px',
  fontSize: '2rem',
  left: 'auto',
  position: 'fixed',
};

const fabIsh = {
  color: 'primary' as const,
  sx: fabStyle as SxProps,
  icon: <AddIcon />,
  label: 'Add',
};

const Home: NextPage = () => {
  const router = useRouter();

  const handleNewBookingClick = () => {
    router.push('/services');
  };

  return (
    <Layout>
      <Image
        src="/images/home/home_background.png"
        alt="car shampoo"
        layout="responsive"
        width={700}
        height={425}
        priority
      />
      <YelpReviews />
      <Typography
        variant="h3"
        align="center"
        sx={{
          marginBottom: '25px',
          marginTop: '25px',
          color: '#bababa',
          letterSpacing: '24px',
        }}
      >
        HOW IT WORKS
      </Typography>
      <BgImage
        imgsrc="/images/home/car-1.jpg"
        imgalt="test"
        height="900px"
        width="100%"
      >
        <Box
          display="flex"
          flexDirection={'column'}
          justifyContent="center"
          sx={{ height: '900px' }}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            sx={{ height: '600px', position: 'relative' }}
          >
            <StyledCarouselComponent
              dots={true}
              width="400px"
              effect="scrollx"
              arrows={true}
              autoplay={false}
              arrowSpacing="-50px"
              prevArrow={<KeyboardArrowLeftOutlinedIcon />}
              nextArrow={<ChevronRightOutlinedIcon />}
            >
              {howItWorksArr.map((el, index) => (
                <Box
                  className={styles.carouselCard}
                  sx={{ width: '400px' }}
                  key={`home-slider-id-${index}`}
                >
                  <Typography
                    variant="h2"
                    align="center"
                    sx={{ color: '#bababa' }}
                  >
                    {index + 1}. {el.title}
                  </Typography>
                  <Typography variant="body1" align="center">
                    {el.description}
                  </Typography>
                </Box>
              ))}
            </StyledCarouselComponent>
          </Box>
        </Box>
      </BgImage>
      <GoogleMapIframe />
      <Fab
        sx={fabIsh.sx}
        aria-label={fabIsh.label}
        color={fabIsh.color}
        size="large"
        variant="extended"
        onClick={() => handleNewBookingClick()}
      >
        {fabIsh.icon} Book new services
      </Fab>
    </Layout>
  );
};

export default Home;
