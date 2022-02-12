import type { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import { Box, Typography, Fab, Card, CardMedia } from '@mui/material';
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
import YelpReviews from '../components/yelp/yelpReviews';

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
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <CardMedia
          component="iframe"
          width="80%"
          height="450"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.201669311961!2d-87.63763688455857!3d41.888519779221355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2ac744df609%3A0x2ff52a1da777dcc1!2sCarrectly%20Auto%20Care!5e0!3m2!1sen!2sus!4v1644696086194!5m2!1sen!2sus"
        />
      </Card>
      {/* <Box
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        sx={{ padding: '30px' }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.201669311961!2d-87.63763688455857!3d41.888519779221355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2ac744df609%3A0x2ff52a1da777dcc1!2sCarrectly%20Auto%20Care!5e0!3m2!1sen!2sus!4v1644696086194!5m2!1sen!2sus"
          width="80%"
          height="450"
          loading="lazy"
        ></iframe>
      </Box> */}
      <Fab
        sx={fabIsh.sx}
        aria-label={fabIsh.label}
        color={fabIsh.color}
        size="large"
        variant="extended"
        onClick={() => handleNewBookingClick()}
      >
        Book new services {fabIsh.icon}
      </Fab>
    </Layout>
  );
};

export default Home;
