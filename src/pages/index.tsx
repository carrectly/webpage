import type { NextPage } from 'next';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import Layout from '../components/Layout/Layout';
import styles from '../../styles/Layout.module.css';
import BgImage from '../components/BgImage/BgImage';
import howItWorksArr from '../data/howItWorks.json';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import StyledCarouselComponent from '../components/StyledCarousel/StyledCarousel';

const carouselWrap = {
  height: "900px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}

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
      <BgImage
        imgsrc="/images/home/car-1.jpg"
        imgalt="test"
        height="900px"
        width="100%"
      >
        <Box sx={carouselWrap} >
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
              prevArrow={<KeyboardArrowLeftOutlinedIcon />} nextArrow={<ChevronRightOutlinedIcon />}
            >
              {howItWorksArr.map((el, index) => (
                <Box className={styles.carouselCard} sx={{ width: '400px' }}>
                  <Typography
                    variant="h2"
                    align="center"
                    sx={{ color: '#bababa' }}
                  >
                    {index+1}. {el.title}
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
    </Layout>
  );
};

export default Home;
