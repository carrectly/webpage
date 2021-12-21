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
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { Store } from '../../utils/Store';
import { useForm, Controller } from 'react-hook-form';
import StepperComponent from '../components/Stepper/Stepper';
import DatePickerCustom from '../components/Forms/ServiceDates';
import Select from '@mui/material/Select';
import { IMaskInput } from 'react-imask';
import ControlledInputField from '../components/Forms/ControlledInputField';
import { Moment } from 'moment';

type submitPropTypes = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  zipCode: string;
  carYear: string;
  carMake: string;
  carModel: string;
  paintColor?: string;
  vinNumber?: string;
  transmission?: string;
  pickupDate: Moment;
  returnDate: Moment;
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
  { fieldName: 'vinNumber', fieldLabel: 'Vin Number' },
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
    setValue('email', shippingAddress.email);
    setValue('phoneNumber', shippingAddress.phoneNumber);
    setValue('address', shippingAddress.address);
    setValue('city', shippingAddress.city);
    setValue('zipCode', shippingAddress.zipCode);
    setValue('carMake', shippingAddress.carMake);
    setValue('carModel', shippingAddress.carModel);
    setValue('paintColor', shippingAddress.paintColor);
    setValue('transmission', shippingAddress.transmission);
    setValue('vinNumber', shippingAddress.vinNumber);
  }, []);

  const submitHandler = (props: submitPropTypes) => {
    console.log('props received during submit', props);
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        props,
      },
    });
    router.push('/placeorder');
  };

  return (
    <Layout title="Shipping Address">
      <StepperComponent activeStep={1} />

      <form onSubmit={handleSubmit(submitHandler)}>
        <Grid container spacing={2} width="100%">
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography component="h4" variant="h4" align="center">
              Car Information
              <List>
                <ListItem>
                  <Controller
                    control={control}
                    name="carYear"
                    render={({ field }) => (
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Car Year
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          fullWidth
                          variant="outlined"
                          defaultValue={2021}
                          label="Car Year"
                          {...field}
                        >
                          {[...Array(40).keys()].map((year) => (
                            <MenuItem value={2021 - year} key={2021 - year}>
                              {2021 - year}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    )}
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
                <ListItem>
                  <Controller
                    control={control}
                    name="transmission"
                    render={({ field }) => (
                      <FormControl fullWidth>
                        <FormLabel component="legend">Transmission</FormLabel>
                        <RadioGroup
                          row
                          defaultValue="automatic"
                          value={field.value}
                          onChange={(e) => field.onChange(e)}
                        >
                          <FormControlLabel
                            value="automatic"
                            control={<Radio />}
                            label="Automatic"
                          />
                          <FormControlLabel
                            value="manual"
                            control={<Radio />}
                            label="Manual"
                          />
                        </RadioGroup>
                      </FormControl>
                    )}
                  />
                </ListItem>
              </List>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography component="h4" variant="h4" align="center">
              Service Date
              <List>
                <ListItem>
                  <Controller
                    control={control}
                    name="pickupDate"
                    render={({ field }) => (
                      <DatePickerCustom
                        placeHolder="Select desired vehicle pick up date"
                        onChange={(e) => field.onChange(e)}
                        value={field.value}
                      />
                    )}
                  />
                </ListItem>
                <ListItem>
                  <Controller
                    control={control}
                    name="returnDate"
                    render={({ field }) => (
                      <DatePickerCustom
                        placeHolder="Select desired vehicle drop off date"
                        onChange={(e) => field.onChange(e)}
                        value={field.value}
                      />
                    )}
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
