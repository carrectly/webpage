import {
  List,
  ListItem,
  Typography,
  Button,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  FormHelperText,
} from '@mui/material';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { Store } from '../../utils/Store';
import { useForm, Controller } from 'react-hook-form';
import StepperComponent from '../components/Stepper/Stepper';
import DatePickerCustom from '../components/Forms/ServiceDates';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IMaskInput } from 'react-imask';
import ControlledInputField from '../components/Forms/ControlledInputField';

type submitPropTypes = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  phoneNumber: string;
  email: string;
  pickupDate: Date;
  returnDate: Date;
};

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(#00) 000-0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

const customerFields = [
  {
    fieldName: 'firstName',
    fieldLabel: 'First Name',
    rules: {
      required: true,
      minLength: 2,
    },
  },
  {
    fieldName: 'lastName',
    fieldLabel: 'Last Name',
    rules: {
      required: true,
      minLength: 2,
    },
  },
];

const vehicleFields = [
  {
    fieldName: 'carMake',
    fieldLabel: 'Car Make',
    rules: {
      required: true,
      minLength: 2,
    },
  },
  {
    fieldName: 'carModel',
    fieldLabel: 'Car Model',
    rules: {
      required: true,
      minLength: 2,
    },
  },
  { fieldName: 'paintColor', fieldLabel: 'Paint Color' },
  { fieldName: 'vin', fieldLabel: 'Vin Number' },
];

const locationFields = [
  {
    fieldName: 'address',
    fieldLabel: 'Address',
    rules: {
      required: true,
      minLength: 2,
    },
  },
  {
    fieldName: 'city',
    fieldLabel: 'City',
    rules: {
      required: true,
      minLength: 2,
    },
  },
  {
    fieldName: 'zipCode',
    fieldLabel: 'Zip Code',
    rules: {
      required: true,
      minLength: 5,
    },
  },
];

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
    setValue('email', shippingAddress.email);
  }, []);

  const submitHandler = ({
    firstName,
    lastName,
    address,
    city,
    postalCode,
    email,
    pickupDate,
    returnDate,
  }: submitPropTypes) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        firstName,
        lastName,
        address,
        city,
        postalCode,
        email,
        pickupDate,
        returnDate,
      },
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
              {customerFields.map((field, i) => (
                <ListItem key={`list-input-id-${i}`}>
                  <ControlledInputField
                    control={control}
                    errors={errors}
                    fieldName={field.fieldName}
                    fieldLabel={field.fieldLabel}
                    rules={field.rules}
                  />
                </ListItem>
              ))}
              <ListItem>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  }}
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="email"
                      label="Email"
                      inputProps={{ type: 'email' }}
                      error={Boolean(errors.email)}
                      helperText={
                        errors.email
                          ? errors.email.type === 'pattern'
                            ? 'Email is not valid'
                            : 'Email is required'
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
                  }}
                  render={({ field }) => (
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      name="phoneNumber"
                      id="formatted-numberformat-input"
                      InputProps={{
                        inputComponent: TextMaskCustom as any,
                      }}
                      error={Boolean(errors.phoneNumber)}
                      helperText={
                        errors.phoneNumber
                          ? errors.phoneNumber.type === 'minLength'
                            ? `Phone number length is 10 digits`
                            : `Phone number is required`
                          : ''
                      }
                      {...field}
                    ></TextField>
                  )}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6}>
            <Typography component="h4" variant="h4" align="center">
              Car Information
              <List>
                <ListItem>
                  <Controller
                    render={({ field }) => (
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Car Year
                        </InputLabel>
                        <Select
                          {...field}
                          labelId="demo-simple-select-label"
                          fullWidth
                          variant="outlined"
                          label="Car Year"
                        >
                          {[...Array(40).keys()].map((year) => (
                            <MenuItem value={2021 - year} key={2021 - year}>
                              {2021 - year}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
                    control={control}
                    name="carYear"
                    defaultValue=""
                  />
                </ListItem>
                {vehicleFields.map((field, i) => (
                  <ListItem key={`list-input-id-${i}`}>
                    <ControlledInputField
                      control={control}
                      errors={errors}
                      fieldName={field.fieldName}
                      fieldLabel={field.fieldLabel}
                      rules={field.rules}
                    />
                  </ListItem>
                ))}
                <ListItem></ListItem>
              </List>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component="h4" variant="h4" align="center">
              Car Location Information
              <List>
                {locationFields.map((field, i) => (
                  <ListItem key={`list-input-id-${i}`}>
                    <ControlledInputField
                      control={control}
                      errors={errors}
                      fieldName={field.fieldName}
                      fieldLabel={field.fieldLabel}
                      rules={field.rules}
                    />
                  </ListItem>
                ))}
              </List>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component="h4" variant="h4" align="center">
              Service Date
              <List>
                <ListItem>
                  <Controller
                    render={({ field }) => (
                      <FormControl fullWidth>
                        <DatePickerCustom
                          placeHolder="Select desired vehicle pickup date"
                          {...field}
                        />
                        <FormHelperText>
                          {errors.returnDate
                            ? errors.returnDate.type === 'minLength'
                              ? `Date length is 10 digits`
                              : `Date is required`
                            : ''}
                        </FormHelperText>
                      </FormControl>
                    )}
                    name="pickupDate"
                    control={control}
                    rules={{
                      required: true,
                    }}
                  />
                </ListItem>
                <ListItem>
                  <Controller
                    render={({ field }) => (
                      <FormControl fullWidth>
                        <DatePickerCustom
                          placeHolder="Select desired vehicle return date"
                          {...field}
                        />
                        <FormHelperText>
                          {errors.returnDate
                            ? errors.returnDate.type === 'minLength'
                              ? `Date length is 10 digits`
                              : `Date is required`
                            : ''}
                        </FormHelperText>
                      </FormControl>
                    )}
                    name="returnDate"
                    control={control}
                    rules={{
                      required: true,
                    }}
                  />
                </ListItem>
              </List>
            </Typography>
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
