import {
    List,
    ListItem,
    Typography,
    TextField,
    Button,
  } from '@mui/material';
  import { useRouter } from 'next/router';
  import React, { useContext, useEffect } from 'react';
  import Layout from '../components/Layout/Layout';
  import { Store } from '../../utils/Store'
  import Cookies from 'js-cookie';
  import { Controller, useForm } from 'react-hook-form';
  import StepperComponent from '../components/Stepper/Stepper';

  export default function Shipping() {
    const {
      handleSubmit,
      control,
      formState: { errors },
      setValue,
      getValues,
    } = useForm();
    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const {
      userInfo,
      cart: { shippingAddress },
    } = state;
    const { location } = shippingAddress;
    useEffect(() => {
      setValue('firstName', shippingAddress.firstName);
      setValue('lastName', shippingAddress.lasName);
      setValue('address', shippingAddress.address);
      setValue('city', shippingAddress.city);
      setValue('postalCode', shippingAddress.postalCode);
      setValue('country', shippingAddress.country);
    }, []);
  
    const submitHandler = ({ firstName, lastName, address, city, postalCode, country }) => {
      dispatch({
        type: 'SAVE_SHIPPING_ADDRESS',
        payload: { firstName, lastName, address, city, postalCode, country, location },
      });
      Cookies.set('shippingAddress', {
        firstName,
        lastName,
        address,
        city,
        postalCode,
        country,
        location,
      });
      router.push('/placeorder');
    };
  
    return (
      <Layout title="Shipping Address">
        <form onSubmit={handleSubmit(submitHandler)} >
          <Typography component="h1" variant="h1">
            Shipping Address
          </Typography>
          <StepperComponent activeStep={2}/>
          <List>
            <ListItem>
              <Controller
                name="firstname"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="firstName"
                    label="First Name"
                    error={Boolean(errors.firstName)}
                    helperText={
                      errors.firstName
                        ? errors.firstName.type === 'minLength'
                          ? 'First Name length is more than 1'
                          : 'First Name is required'
                        : ''
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="lastname"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="firstName"
                    label="Last Name"
                    error={Boolean(errors.lastName)}
                    helperText={
                      errors.lastName
                        ? errors.lastName.type === 'minLength'
                          ? 'Last Name length is more than 1'
                          : 'Last Name is required'
                        : ''
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="address"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="address"
                    label="Address"
                    error={Boolean(errors.address)}
                    helperText={
                      errors.address
                        ? errors.address.type === 'minLength'
                          ? 'Address length is more than 1'
                          : 'Address is required'
                        : ''
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="city"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="city"
                    label="City"
                    error={Boolean(errors.city)}
                    helperText={
                      errors.city
                        ? errors.city.type === 'minLength'
                          ? 'City length is more than 1'
                          : 'City is required'
                        : ''
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="postalCode"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="postalCode"
                    label="Postal Code"
                    error={Boolean(errors.postalCode)}
                    helperText={
                      errors.postalCode
                        ? errors.postalCode.type === 'minLength'
                          ? 'Postal Code length is more than 1'
                          : 'Postal Code is required'
                        : ''
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="country"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="country"
                    label="Country"
                    error={Boolean(errors.country)}
                    helperText={
                      errors.country
                        ? errors.country.type === 'minLength'
                          ? 'Country length is more than 1'
                          : 'Country is required'
                        : ''
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Button variant="contained" type="submit" fullWidth color="primary">
                Continue
              </Button>
            </ListItem>
          </List>
        </form>
      </Layout>
    );
  }
  