import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout/Layout';
import { Store } from '../../utils/Store';
import { Grid, Button, Card, List, ListItem } from '@mui/material';
import { useRouter } from 'next/router';
import StepperComponent from '../components/Stepper/Stepper';
import ServicesDataTable from 'components/Table/ServicesDataTable';
import cartTableColumns from 'components/Table/Columns/CartServicesColumns';
import EmptyCart from 'components/Cart/EmptyCart';

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
        <EmptyCart />
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <ServicesDataTable
              cartItemsArray={cartItems}
              columns={cartTableColumns}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>Estimated total price: ${totalPrice()}</ListItem>
                <ListItem>
                  Note: Total price and duration will vary based on the size of
                  your vehicle*
                </ListItem>
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
