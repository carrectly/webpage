import React from 'react';
import serviceArray from '../data/services.json';
import Layout from '../components/Layout/Layout';
import ServiceCard from '../components/ServiceCards/ServiceCard';
import { Grid } from '@mui/material';


const popularServices = serviceArray.POPULAR;

const services = () => {
    console.log(popularServices[0])
  return (
    <Layout>
      <Grid display="flex" flexDirection="row" flexWrap='wrap' justifyContent="space-evenly">
        {popularServices.map((el) => (
          <ServiceCard name={el.SERVICE} image={el.IMAGE} shortDescription={el.SHORTDESCRIPTIONS}/>
        ))}
      </Grid>
    </Layout>
  );
};

export default services;
