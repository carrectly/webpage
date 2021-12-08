import { List, ListItem, Typography, TextField, Button } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { Store } from '../../utils/Store';
import { Controller, useForm } from 'react-hook-form';
import StepperComponent from '../components/Stepper/Stepper';
import isWeekend from 'date-fns/isWeekend';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

export default function DatePicker() {
  const [value, setValue] = React.useState<Date | null>(new Date());
  const router = useRouter();
  const checkoutHandler = () => {
    router.push('/customerdetails');
  };
  return (
    <Layout title="Shipping Address">
      <Typography component="h1" variant="h1">
        Pick your service date
      </Typography>
      <StepperComponent activeStep={1} />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker<Date>
          orientation="landscape"
          openTo="day"
          value={value}
          shouldDisableDate={isWeekend}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Button
        onClick={checkoutHandler}
        variant="contained"
        color="primary"
        fullWidth
      >
        Proceed to user info
      </Button>
    </Layout>
  );
}
