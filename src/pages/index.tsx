import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { Box } from '@mui/material';
import Layout from '../components/Layout/Layout';
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Home: NextPage = () => {
  return (
    <Layout>
      <Image
        alt="car shampoo"
        src="/images/home/home_background.png"
        layout="responsive"
        width={700}
        height={425}
        priority
      />
      <div>
        <h1>How it works</h1>
        <Carousel autoplay dots={true} effect='scrollx'>
          <Box sx={{height: '100px', background: 'blue'}}>
            <h3>1</h3>
          </Box>
          <Box sx={{height: '100px', background: 'blue'}}>
            <h3>2</h3>
          </Box>
          <Box sx={{height: '100px', background: 'blue'}}>
            <h3>3</h3>
          </Box>
        </Carousel>
        <Image
          alt="car hexagon"
          src="/images/home/car-1.jpg"
          layout="responsive"
          width={700}
          height={425}
          priority
        />
      </div>
    </Layout>
  );
};

export default Home;
