import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { Container } from '@mui/material';
import Layout from '../components/Layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Image
        alt="Mountains"
        src="/images/home/home_background.png"
        layout="responsive"
        width={700}
        height={475}
        priority
      />
    </Layout>
  );
};

export default Home;
