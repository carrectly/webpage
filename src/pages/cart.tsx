import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout/Layout';
import { Store } from '../../utils/Store';
import NextLink from 'next/link';
import {
  Grid,
  TableContainer,
  Table,
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
    router.push('/customerdetails');
  };

  const totalPrice = () => {
    return cartItems.reduce((a, c) => a + c.price[0], 0);
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
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Estimated Price</TableCell>
                    <TableCell align="right">Estimated Durarion</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <CartModal serviceObject={item} />
                      </TableCell>
                      <TableCell align="right">
                        <List sx={{ display: 'flex', flexDirection: 'row' }}>
                          {item.price &&
                            item.price.map((el, i) => (
                              <ListItem key={`price-variant-${i}`}>
                                ${el}
                              </ListItem>
                            ))}
                        </List>
                      </TableCell>
                      <TableCell align="right">{item.duration}</TableCell>
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
