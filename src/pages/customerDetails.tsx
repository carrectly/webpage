import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
} from '@mui/material';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { Store } from '../../utils/Store';
import { Controller, useForm } from 'react-hook-form';
import StepperComponent from '../components/Stepper/Stepper';
import DatePickerPage from '../components/Forms/ServiceDates';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type submitPropTypes = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  phoneNumber: string;
};

export default function Shipping() {
  const [carYear, setCarYear] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCarYear(event.target.value as string);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { shippingAddress } = state;
  useEffect(() => {
    setValue('firstName', shippingAddress.firstName);
    setValue('lastName', shippingAddress.lastName);
    setValue('address', shippingAddress.address);
    setValue('city', shippingAddress.city);
    setValue('postalCode', shippingAddress.postalCode);
    setValue('phoneNumber', shippingAddress.phoneNumber);
  }, []);

  const submitHandler = ({
    firstName,
    lastName,
    address,
    city,
    postalCode,
  }: submitPropTypes) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { firstName, lastName, address, city, postalCode },
    });
    router.push('/placeorder');
  };

  return (
    <Layout title="Shipping Address">
      <StepperComponent activeStep={1} />

      <form onSubmit={handleSubmit(submitHandler)}>
        <Grid container spacing={2} width="100%">
          <Grid item xs={6}>
            <Typography component="h4" variant="h4" align="center">
              Customer Information
            </Typography>
            <List>
              <ListItem>
                <Controller
                  name="firstName"
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
                  name="lastName"
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
                      id="lastName"
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
                  name="phoneNumber"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                  }}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      type="number"
                      fullWidth
                      id="phoneNumber"
                      label="Phone Number"
                      error={Boolean(errors.phoneNumber)}
                      helperText={
                        errors.phoneNumber
                          ? errors.phoneNumber.type === 'minLength'
                            ? 'Phone number must consist of 10 digits'
                            : 'Phone number is required'
                          : ''
                      }
                      {...field}
                    ></TextField>
                  )}
                ></Controller>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6}>
            <Typography component="h4" variant="h4" align="center">
              Car Information
              <List>
                <ListItem>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Car year
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={carYear}
                      label="Car Year"
                      onChange={handleChange}
                    >
                      {[...Array(40).keys()].map((year) => (
                        <MenuItem value={2021 - year}>{2021 - year}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </ListItem>
                <ListItem>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="carMake"
                    label="Car make"
                  ></TextField>
                </ListItem>
                <ListItem>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="carModel"
                    label="Car model"
                  ></TextField>
                </ListItem>
                <ListItem>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="paintColor"
                    label="Paint Color"
                  ></TextField>
                </ListItem>
                <ListItem>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="vinNumber"
                    label="Vin #"
                  ></TextField>
                </ListItem>
              </List>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component="h4" variant="h4" align="center">
              Car Location Information
              <List>
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
              </List>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component="h4" variant="h4" align="center">
              Service Date
            </Typography>
            <DatePickerPage />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Continue to order summary
            </Button>
          </Grid>
        </Grid>
      </form>
    </Layout>
  );
}
