import React, { useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout/Layout';
import { Store } from '../../utils/Store';
import {
  Grid,
  Typography,
  CircularProgress,
  Button,
  Card,
  ListItem,
  TableContainer,
  Table,
  TableCell,
  TableRow,
} from '@mui/material';
import { useRouter } from 'next/router';
// import { useSnackbar } from 'notistack';
import StepperComponent from '../components/Stepper/Stepper';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ServicesDataTable from 'components/Table/ServicesDataTable';
import orderSummaryColumns from 'components/Table/Columns/OrderSummaryColumns';
import { fieldLabelsUI } from '../../utils/helperFunctions';
import moment from 'moment';
// adding comments

function PlaceOrder() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { cartItems, shippingAddress } = state;
  const myuuid = uuidv4();
  const { firstName, lastName, email, phoneNumber } = shippingAddress;
  const customerObj = { firstName, lastName, email, phoneNumber };
  const {
    address,
    city,
    zipCode,
    carYear,
    carMake,
    carModel,
    carColor,
    vin,
    pickupDate,
    dropoffDate,
    customerComments,
  } = shippingAddress;
  const orderObj = {
    hash: myuuid,
    address,
    city,
    zipCode,
    carYear,
    carMake,
    carModel,
    carColor,
    vin,
    pickupDate,
    dropoffDate,
    customerComments,
  };

  const totalPrice = () => {
    return cartItems.reduce((a, c) => {
      if (c.price) {
        return a + c.price[0];
      } else {
        return a;
      }
    }, 0);
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      router.push('/cart');
    }
    console.log('state after adding address', state);
  }, []);
  //   const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const placeOrderHandler = async () => {
    // closeSnackbar();
    try {
      setLoading(true);
      const { data } = await axios.post('/api', {
        services: cartItems,
        customer: customerObj,
        order: orderObj,
      });
      dispatch({ type: 'CART_CLEAR' });

      setLoading(false);
    } catch (err) {
      setLoading(false);
      //   enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };

  const editServicesHandler = () => {
    router.push('/cart');
  };

  const editCustomerInfo = () => {
    router.push('/orderdetails');
  };

  const formEntriesKeyValueArray = Object.entries(shippingAddress) || [];

  return (
    <Layout title="Place Order">
      <StepperComponent activeStep={2}></StepperComponent>

      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Card>
            <Typography component="h4" variant="h4" align="center">
              Customer Details Summary
            </Typography>
            <TableContainer>
              <Table>
                {formEntriesKeyValueArray.map((formFieldKeyValueArr) =>
                  formFieldKeyValueArr[1] ? (
                    formFieldKeyValueArr[0] === 'dropoffDate' ||
                    formFieldKeyValueArr[0] === 'pickupDate' ? (
                      <TableRow>
                        <TableCell>
                          {fieldLabelsUI[formFieldKeyValueArr[0]]}
                        </TableCell>
                        <TableCell>
                          {moment(formFieldKeyValueArr[1]).format(
                            'MM-DD-YY HH:00'
                          )}
                        </TableCell>
                      </TableRow>
                    ) : (
                      <TableRow>
                        <TableCell>
                          {fieldLabelsUI[formFieldKeyValueArr[0]]}
                        </TableCell>
                        <TableCell>{formFieldKeyValueArr[1]}</TableCell>
                      </TableRow>
                    )
                  ) : (
                    <div />
                  )
                )}
              </Table>
            </TableContainer>
            <Button
              onClick={editCustomerInfo}
              variant="outlined"
              color="primary"
              fullWidth
            >
              Edit customer info
            </Button>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card>
            <Typography component="h4" variant="h4" align="center">
              Order Summary
            </Typography>

            <ServicesDataTable
              cartItemsArray={cartItems}
              columns={orderSummaryColumns}
            />
            <Grid container>
              <Grid item xs={6}>
                <Typography>
                  <strong>Estimated total:</strong>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography align="right">
                  <strong>${totalPrice()}</strong>
                </Typography>
              </Grid>
            </Grid>

            <Button
              onClick={placeOrderHandler}
              variant="contained"
              color="primary"
              fullWidth
            >
              Place Order
            </Button>
            {loading && (
              <ListItem>
                <CircularProgress />
              </ListItem>
            )}
            <Button
              onClick={editServicesHandler}
              variant="outlined"
              color="primary"
              fullWidth
            >
              Edit Services
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(PlaceOrder), { ssr: false });
