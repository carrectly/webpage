import { Typography, Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout/Layout';
import StepperComponent from '../components/Stepper/Stepper';
import { DatePicker } from 'antd';
import moment from 'moment';

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

function disabledDateTime() {
  return {
    disabledHours: () => [...range(0, 8), ...range(18, 24)],
  };
}

export default function DatePickerPage() {
  const [pickUpValue, setPickUpValue] = React.useState<Date | null>(new Date());
  const [returnValue, setReturnValue] = React.useState<Date | null>(new Date());
  const router = useRouter();

  const checkoutHandler = () => {
    router.push('/customerdetails');
  };
  return (
    <Layout title="Service Date">
      <Typography component="h1" variant="h1" align="center">
        Pick your service date
      </Typography>
      <StepperComponent activeStep={1} />
      <Grid container spacing={2} columns={8}>
        <Grid
          item
          xs={4}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography component="h4" variant="h4">
            Desired car pickup date
          </Typography>

          <DatePicker
            format="YYYY-MM-DD HH:mm"
            showTime={{
              defaultValue: moment('00:00:00', 'HH:mm'),
              minuteStep: 60,
            }}
            disabledDate={disabledDate}
            disabledTime={disabledDateTime}
          />
        </Grid>

        <Grid
          item
          xs={4}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography component="h4" variant="h4">
            Desired car return date
          </Typography>
          <DatePicker
            format="YYYY-MM-DD HH"
            showTime={{ defaultValue: moment('00:00:00', 'HH') }}
            disabledDate={disabledDate}
            disabledTime={disabledDateTime}
          />
        </Grid>
        <Grid item xs={8} display="flex" justifyContent="center">
          <Button
            onClick={checkoutHandler}
            variant="contained"
            color="primary"
            sx={{ padding: '20px' }}
          >
            Proceed to user info
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
}
