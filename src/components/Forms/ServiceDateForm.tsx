import React from 'react';
import { Control, FieldValues, UseFormWatch } from 'react-hook-form';
import { List, ListItem, Typography } from '@mui/material';
import ControlledDatePickerField from './Fields/ControlledDatePickerField';
import moment from 'moment';

interface ServiceDateFormProps {
  control: Control;
  watch: UseFormWatch<FieldValues>;
}

export const ServiceDateForm: React.FC<ServiceDateFormProps> = ({
  control,
  watch,
}) => {
  const watchPickupDate = watch('pickupDate');

  return (
    <>
      <Typography component="h4" variant="h4" align="center">
        Service Date
      </Typography>
      <List>
        <ListItem>
          <ControlledDatePickerField
            control={control}
            fieldName={'pickupDate'}
            fieldLabel={'Select desired vehicle pick up date'}
          />
        </ListItem>
        <ListItem>
          <ControlledDatePickerField
            control={control}
            disabled={!Boolean(watchPickupDate)}
            startDate={moment(watchPickupDate).add(4, 'hours')}
            fieldName={'dropoffDate'}
            fieldLabel={'Select desired vehicle drop off date'}
          />
        </ListItem>
      </List>
    </>
  );
};
