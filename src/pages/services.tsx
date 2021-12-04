import React from 'react';
import serviceArray from '../data/services.json';
import Layout from '../components/Layout/Layout';
import ServiceCard from '../components/ServiceCards/ServiceCard';
import { Grid } from '@mui/material';
import { Store } from '../../utils/Store';

const popularServices = serviceArray.POPULAR;

const services = () => {

  return (
    <Layout>
      <Grid display="flex" flexDirection="row" flexWrap='wrap' justifyContent="space-evenly">
        {popularServices.map((el) => (
          <ServiceCard serviceObject={el}/>
        ))}
      </Grid>
    </Layout>
  );
};

export default services;
