import React from 'react';
import serviceArray from '../data/services.json';
import Layout from '../components/Layout/Layout';
import ServiceCard from '../components/ServiceCards/ServiceCard';
import {
  Grid,
  Box,
  Accordion,
  AccordionSummary,
  AccordionSummaryProps,
  AccordionDetails,
} from '@mui/material';
import styled from '@emotion/styled';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import BuildIcon from '@mui/icons-material/Build';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import CarRentalIcon from '@mui/icons-material/CarRental';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Inventory2Icon from '@mui/icons-material/Inventory2';

const iconsArr = [
  <StarIcon />,
  <LocalCarWashIcon />,
  <BuildIcon />,
  <DirectionsCarIcon />,
  <AirlineSeatReclineExtraIcon />,
  <AspectRatioIcon />,
  <CarRepairIcon />,
  <Inventory2Icon/>,
  <CarRentalIcon />
];

const AccordionSummaryStyled = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#e6e6e6',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& hover': {
    backgroundColor: '#ddd',
  },
}));

const styleA = {
  backgroundColor: '#e6e6e6',
  flexDirection: 'row',
  '&:hover': {
    backgroundColor: '#ddd',
  },
};

const services = () => {
  return (
    <Layout>
      <Grid container justifyContent='center'>
      {serviceArray.map((service, index) => (
        <Accordion key={`accordiong_id_${index}`} sx={{width: '90vw', margin: '10px'}}>
          <AccordionSummary
            sx={styleA}
            expandIcon={<ExpandMoreIcon color="primary" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box>
            {iconsArr[index]}
            </Box>
            <Box
              sx={{
                width: '100%',
                textAlign: 'center'
              }}
            >
             {service.category}
            </Box>
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
      </Grid>
    </Layout>
  );
};

export default services;
