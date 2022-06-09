import React from 'react';
import { Controller, Control, FieldErrors, RegisterOptions } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

interface InputFieldProps {
  fieldName: string;
  fieldLabel: string;
  control: Control;
  errors: FieldErrors;
  disabled?: boolean;
  required?: boolean;
  minLength?: number;
  extraProps?: Partial<TextFieldProps>;
  customRules?: RegisterOptions;
  customHelperText?: { [key: string]: string | undefined };
}

const ControlledInputField: React.FC<InputFieldProps> = ({
  control,
  errors,
  fieldName,
  fieldLabel,
  disabled,
  required,
  minLength,
  extraProps = {},
  customRules = {},
  customHelperText = {},
}) => {
  minLength = (customRules.minLength as number) || minLength;
  const helperText: { [key: string]: string } = {
    minLength: `${fieldLabel} length should at least be ${minLength || 1}`,
    required: `${fieldLabel} is required`,
    ...customHelperText,
  };

  return (
    <Controller
      name={fieldName}
      control={control}
      defaultValue=""
      rules={{ minLength, required, ...customRules }}
      render={({ field }) => (
        <TextField
          disabled={disabled}
          variant="outlined"
          fullWidth
          id={fieldName}
          label={fieldLabel}
          error={Boolean(errors[fieldName])}
          helperText={
            errors[fieldName] &&
            (helperText[errors[fieldName].type] || `${fieldLabel} is not valid`)
          }
          {...extraProps}
          {...field}
        />
      )}
    />
  );
};

export default ControlledInputField;
