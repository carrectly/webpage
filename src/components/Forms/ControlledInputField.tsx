import React, { FC } from 'react';
import { Controller, Control, FieldErrors } from 'react-hook-form';
import { TextField } from '@mui/material';

type formFieldProps = {
  control: Control;
  errors: FieldErrors;
  fieldName: string;
  fieldLabel: string;
  rules?: any;
};

const ControlledInputField: FC<formFieldProps> = ({
  control,
  errors,
  fieldName,
  fieldLabel,
  rules = {},
}) => {
  return (
    <Controller
      name={fieldName}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field }) => (
        <TextField
          variant="outlined"
          fullWidth
          id={fieldName}
          label={fieldLabel}
          error={Boolean(errors[fieldName])}
          helperText={
            errors[fieldName]
              ? errors[fieldName].type === 'minLength'
                ? `${fieldLabel} length is more than 1`
                : `${fieldLabel} is required`
              : ''
          }
          {...field}
        ></TextField>
      )}
    ></Controller>
  );
};

export default ControlledInputField;
