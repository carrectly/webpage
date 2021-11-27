import React from 'react';
import serviceArray from '../data/services.json';
import Layout from '../components/Layout/Layout';
import ServiceCard from '../components/ServiceCards/ServiceCard';
import { Grid } from '@mui/material';

const services = () => {
  return (
    <Layout>
      <Grid display="flex" flexDirection="row" flexWrap='wrap' justifyContent="space-evenly">
        {serviceArray.map((el) => (
          <ServiceCard name={el.name} />
        ))}
      </Grid>
    </Layout>
  );
};

export default services;
