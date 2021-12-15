import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout/Layout';
import { Store } from '../../utils/Store';
import NextLink from 'next/link';
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
  Button,
  Card,
  List,
  ListItem,
} from '@mui/material';
import { useRouter } from 'next/router';
import StepperComponent from '../components/Stepper/Stepper';
import CartModal from '../components/Modal/CartModal';

function CartScreen() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);

  const { cartItems } = state;

  const removeItemHandler = (itemId: number) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: itemId });
  };
  const checkoutHandler = () => {
    router.push('/datepicker');
  };

  return (
    <Layout title="Shopping Cart">
      <Typography component="h1" variant="h1">
        Shopping Cart
      </Typography>
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
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell> Empty</TableCell>

                      <TableCell>
                        <CartModal serviceObject={item} />
                      </TableCell>
                      <TableCell align="right">${item.price}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => removeItemHandler(item.id)}
                        >
                          x
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  {/* <Typography variant="h2">
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                  </Typography> */}
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
