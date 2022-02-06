import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout/Layout';
import { Store } from '../../utils/Store';
import NextLink from 'next/link';
import { Grid, Link, Button, Card, List, ListItem } from '@mui/material';
import { useRouter } from 'next/router';
import StepperComponent from '../components/Stepper/Stepper';

import CustomTable from '../components/Table/CustomTable';

function CartScreen() {
  const router = useRouter();
  const { state } = useContext(Store);

  const { cartItems } = state;

  const checkoutHandler = () => {
    router.push('/orderdetails');
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

  return (
    <Layout title="Shopping Cart">
      <StepperComponent activeStep={0} />
      {cartItems.length === 0 ? (
        <div>
          Cart is empty.{' '}
          <NextLink href="/services" passHref>
            <Link>Pick a service for your needs</Link>
          </NextLink>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <CustomTable cartItemsArray={cartItems} />
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>Estimated total price: ${totalPrice()}</ListItem>
                <ListItem>
                  <Button
                    onClick={checkoutHandler}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Check Out
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });
