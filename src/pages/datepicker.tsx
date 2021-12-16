import { Typography, TextField, Button, Box, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout/Layout';
import StepperComponent from '../components/Stepper/Stepper';
import isWeekend from 'date-fns/isWeekend';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';

export default function DatePicker() {
  const [pickUpValue, setPickUpValue] = React.useState<Date | null>(new Date());
  const [returnValue, setReturnValue] = React.useState<Date | null>(new Date());
  const router = useRouter();

  const checkoutHandler = () => {
    router.push('/customerdetails');
  };
  return (
    <Layout title="Service Date">
      <StepperComponent activeStep={1} />
      <Grid container flex="row-wrap" justifyContent="space-around">
        <Box>
          <Typography component="h4" variant="h4">
            Pick your service date
          </Typography>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDateTimePicker
              value={pickUpValue}
              shouldDisableDate={isWeekend}
              minutesStep={60}
              onChange={(newValue: Date) => {
                setPickUpValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box>
          <Typography component="h4" variant="h4">
            Pick your desired return date
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDateTimePicker
              value={returnValue}
              shouldDisableDate={isWeekend}
              minutesStep={60}
              onChange={(newValue: Date) => {
                setReturnValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Button
          onClick={checkoutHandler}
          variant="contained"
          color="primary"
          sx={{ padding: '20px' }}
        >
          Proceed to user info
        </Button>
      </Grid>
    </Layout>
  );
}
