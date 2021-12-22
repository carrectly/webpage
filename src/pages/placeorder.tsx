import React, { useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout/Layout';
import { Store } from '../../utils/Store';
import {
  Grid,
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  CircularProgress,
  Button,
  Card,
  List,
  ListItem,
} from '@mui/material';
import { useRouter } from 'next/router';
// import { useSnackbar } from 'notistack';
import StepperComponent from '../components/Stepper/Stepper';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

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
    zipcode,
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
    zipcode,
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
    return cartItems.reduce((a, c) => a + c.price[0], 0);
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
      const { data } = await axios.post(
        'https://carrectly-admin-staging.herokuapp.com/wpbookings/neworder',
        {
          services: cartItems,
          customer: customerObj,
          order: orderObj,
        }
      );
      dispatch({ type: 'CART_CLEAR' });

      setLoading(false);
    } catch (err) {
      setLoading(false);
      //   enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };
  const summaryArr = Object.entries(shippingAddress) || [];
  console.log('arr', summaryArr);
  return (
    <Layout title="Place Order">
      <StepperComponent activeStep={2}></StepperComponent>
      <Typography component="h2" variant="h2" align="center">
        Order summary
      </Typography>

      <Grid container spacing={1}>
        <Grid item md={9} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Typography component="h3" variant="h3">
                  Customer Details Summary
                </Typography>
              </ListItem>
              {/* {summaryArr.map((info, i) => (
                <ListItem key={`summary-line-id-${i}`}>
                  {info[0]}: {info[1]}
                </ListItem>
              ))} */}
            </List>
          </Card>
          <Card>
            <List>
              <ListItem>
                <Typography component="h3" variant="h3">
                  Services Requested
                </Typography>
              </ListItem>
              <ListItem>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cartItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <Link>
                              <Typography>{item.name}</Typography>
                            </Link>
                          </TableCell>
                          <TableCell align="right">
                            {/* Price:
                            <List
                              sx={{ display: 'flex', flexDirection: 'row' }}
                            >
                              {item.price &&
                                item.price.map((el, i) => (
                                  <ListItem key={`price-variant-${i}`}>
                                    ${el}
                                  </ListItem>
                                ))}
                            </List> */}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </ListItem>
            </List>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Typography variant="h2">Order Summary</Typography>
              </ListItem>
              <ListItem>
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
              </ListItem>
              <ListItem>
                <Button
                  onClick={placeOrderHandler}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Place Order
                </Button>
              </ListItem>
              {loading && (
                <ListItem>
                  <CircularProgress />
                </ListItem>
              )}
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(PlaceOrder), { ssr: false });
