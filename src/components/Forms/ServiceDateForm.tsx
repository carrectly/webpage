import React from 'react';
import { Control } from 'react-hook-form';
import { List, ListItem, Typography } from '@mui/material';
import ControlledDatePickerField from './Fields/ControlledDatePickerField';

interface ServiceDateFormProps {
  control: Control;
}

export const ServiceDateForm: React.FC<ServiceDateFormProps> = ({
  control,
}) => {
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
            fieldName={'dropoffDate'}
            fieldLabel={'Select desired vehicle drop off date'}
          />
        </ListItem>
      </List>
    </>
  );
};
