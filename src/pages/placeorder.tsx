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
import StepperComponent from '../components/Stepper/Stepper';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ServicesDataTable from 'components/Table/ServicesDataTable';
import orderSummaryColumns from 'components/Table/Columns/OrderSummaryColumns';
import { fieldLabelsUI } from '../../utils/helperFunctions';
import moment from 'moment';
import { OrderDetailsType } from '../../utils/types';

type P = keyof OrderDetailsType;

function PlaceOrder() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { cartItems, shippingAddress } = state;
  const [loading, setLoading] = useState(false);

  const { firstName, lastName, email, phoneNumber, ...orderInfo } =
    shippingAddress;
  const customerInfo = { firstName, lastName, email, phoneNumber };
  (orderInfo as any).hash = uuidv4();

  const totalPrice = () => {
    return cartItems.reduce((subTotal, service) => {
      return subTotal + (service.prices ? service.prices[0] : 0);
    }, 0);
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      router.push('/cart');
    }
  }, []);

  const placeOrderHandler = async () => {
    try {
      setLoading(true);
      await axios.post('/api/sendOrder', {
        services: cartItems,
        customer: customerInfo,
        order: orderInfo,
      });

      dispatch({ type: 'CART_CLEAR' });

      setLoading(false);
      router.push('/confirmation');
    } catch (err) {
      setLoading(false);
    }
  };

  const editServicesHandler = () => {
    router.push('/cart');
  };

  const editCustomerInfo = () => {
    router.push('/orderdetails');
  };

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
                {Object.keys(shippingAddress).map((key) => {
                  const value = shippingAddress[key as keyof OrderDetailsType];
                  return (
                    value && (
                      <TableRow key={key}>
                        <TableCell>
                          {fieldLabelsUI[key as keyof typeof fieldLabelsUI]}
                        </TableCell>
                        <TableCell>
                          {key === 'dropoffDate' || key === 'pickupDate'
                            ? moment(value).format('MM-DD-YY HH:00')
                            : value}
                        </TableCell>
                      </TableRow>
                    )
                  );
                })}
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
          <Typography>
            Once the order is placed we will reach out to you via text to
            confirm order details and to coordinate vehicle pickup times. Due to
            increasingly high service volume, please allow a few hours for our
            logistics team to process your booking request.
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(PlaceOrder), { ssr: false });
