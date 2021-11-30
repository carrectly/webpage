import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { Box, Typography, Button } from '@mui/material';
import Layout from '../components/Layout/Layout';
import { Carousel, CarouselProps } from 'antd';
import styles from '../../styles/Layout.module.css';
import styled from '@emotion/styled';
import { FC } from 'react';
import BgImage from '../components/BgImage/BgImage';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const StyledCarousel = styled(Carousel)<CarouselProps>`
  width: 20vw;
  z-index: 10;
  > .slick-dots li button {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: #83509f;
  }
  > .slick-dots li.slick-active button {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background: #cdafde;
  }
  .ant-carousel .slick-prev,
  .ant-carousel .slick-prev:hover {
    left: 10px;
    z-index: 12;
    color: white;
    font-size: 20px;
    height: 30px;
  }

  .ant-carousel .slick-next,
  .ant-carousel .slick-next:hover {
    right: 10px;
    z-index: 12;
    color: white;
    font-size: 20px;
    height: 30px;
  }
`;

const StyledCarouselComponent: FC = ({ children }) => {
  return <StyledCarousel>{children}</StyledCarousel>;
};

const Home: NextPage = () => {
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
        <BgImage imgsrc='/images/home/car-1.jpg'   imgalt='test' height='900px' width='100%'>
        <div className={styles.carouselWrap}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            sx={{ height: '600px' }}
          >
            <StyledCarousel dots={true} effect="scrollx" arrows={true} autoplay={true}>
              <Box className={styles.carouselCard}>
                <Typography
                  variant="h2"
                  align="center"
                  sx={{ color: '#bababa' }}
                >
                  REQUEST
                </Typography>
                <Typography variant="body1" align="center">
                  Book any vehicle service in advance or on-demand for the
                  upfront price. We work around your schedule, not the other way
                  around.
                </Typography>
              </Box>
              <Box className={styles.carouselCard}>
                <Typography
                  variant="h2"
                  align="center"
                  sx={{ color: '#bababa' }}
                >
                  PICK UP
                </Typography>
                <Typography variant="body1" align="center">
                  Carrectly team answers all your questions & confirms your
                  priority service. We reach out to coordinate your free
                  concierge vehicle pick-up.
                </Typography>
              </Box>
              <Box className={styles.carouselCard}>
                <Typography
                  variant="h2"
                  align="center"
                  sx={{ color: '#bababa' }}
                >
                  SERVICE
                </Typography>
                <Typography variant="body1" align="center">
                  Work starts right away. Our knowledgeable team keeps you
                  updated and asks your approval prior to all extra repairs or
                  services.
                </Typography>
              </Box>
              <Box className={styles.carouselCard}>
                <Typography
                  variant="h2"
                  align="center"
                  sx={{ color: '#bababa' }}
                >
                  DROP OFF
                </Typography>
                <Typography variant="body1" align="center">
                  The vehicle is delivered back to you, wherever you are in
                  Chicago. You pay online once you have your car back and are
                  happy.
                </Typography>
              </Box>
              <Box className={styles.carouselCard}>
                <Typography
                  variant="h2"
                  align="center"
                  sx={{ color: '#bababa' }}
                >
                  WOW
                </Typography>
                <Typography variant="body1" align="center">
                  You've just experienced the fastest, most transparent and
                  convenient auto care, ever. No rip-offs, up-sells, hassles, or
                  waiting.
                </Typography>
              </Box>
            </StyledCarousel>
          </Box>
        </div>
        </BgImage>
    </Layout>
  );
};

export default Home;
