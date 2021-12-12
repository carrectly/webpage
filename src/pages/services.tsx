import React, { FC } from 'react';
import serviceArray from '../data/services.json';
import Layout from '../components/Layout/Layout';
import ServiceCard from '../components/ServiceCards/ServiceCard';
import {
  Grid,
  Box,
  Typography,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { ServicesDataType } from '../../utils/types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const services = () => {
  return (
    <Layout>
      {serviceArray.map((service, index) => (
        <Accordion key={`accordiong_id_${index}`}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{service.category}</Typography>
          </AccordionSummary>

          <AccordionDetails
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
            }}
          >
            {service.services.map((el) => (
              <ServiceCard serviceObject={el} />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Layout>
  );
};

export default services;
